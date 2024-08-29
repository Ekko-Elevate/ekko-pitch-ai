import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
// import connectMongo from '@/libs/mongoose';
// import User from '@/models/User';
import { addBilling } from "@/app/_lib/mongoDB/utils/addbilling.js";
import { removeBilling } from "@/app/_lib/mongoDB/utils/removebilling.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req) {
	const body = await req.text();

	const signature = headers().get("stripe-signature");

	let data;
	let eventType;
	let event;

	// verify Stripe event is legit
	try {
		event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
	} catch (err) {
		console.error(`Webhook signature verification failed. ${err.message}`);
		return NextResponse.json({ error: err.message }, { status: 400 });
	}

	data = event.data;
	eventType = event.type;
	console.log(eventType);
	try {
		switch (eventType) {
			case "customer.subscription.deleted": {
				const subscription = event.data.object;
				const customerID = subscription.customer;
				console.log(subscription);
				console.log("User has cancelled their plan");
				console.log(`Customer ID: ${customerID}`);

				break;
			}
			//called when user pays money initially AND every month
			case "invoice.paid": {
				const invoice = event.data.object;
				const subscriptionID = invoice.subscription;
				const customerID = invoice.customer;

				// Retrieve the subscription details
				const subscription = await stripe.subscriptions.retrieve(
					subscriptionID
				);

				// Retrieve the customer details
				const customer = await stripe.customers.retrieve(customerID);

				// Get the Auth0 user ID from the subscription metadata
				const auth0UserID = subscription.metadata.auth0UserId;
				console.log(customer);
				console.log(
					`Subscription payment successful for customer ${customer.email}`
				);
				console.log(`Subscription ID: ${subscriptionID}`);
				console.log(`Amount paid: ${invoice.amount_paid}`);
				console.log(`Auth0 User ID: ${auth0UserID}`);
				//IF USER DOESNT EXIST ADD THEM TO BILLING TABLE ELSE DO NOTHING
				await addBilling(auth0UserID, customerID, subscriptionID);
				break;
			}
			default:
				console.log("Unhandled Event Type");
		}
	} catch (e) {
		console.error("stripe error: " + e.message + " | EVENT TYPE: " + eventType);
	}

	return new Response(`Caputured Webhook of type: ${eventType}!`);
}
//this route handler will handle starting the unsubscribe functionality
