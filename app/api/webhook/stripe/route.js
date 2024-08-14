import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
// import connectMongo from '@/libs/mongoose';
// import User from '@/models/User';

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
			//called when user unsubscribes
			case "customer.subscription.deleted": {
				const subscription = await stripe.subscriptions.retrieve(
					data.object.id
				);

				console.log("User has cancelled their plan");

				break;
			}
			//called when user pays money initially AND every month
			case "invoice.paid": {
				const invoice = event.data.object;
				const subscriptionId = invoice.subscription;
				const customerId = invoice.customer;

				// Retrieve the subscription details
				const subscription = await stripe.subscriptions.retrieve(
					subscriptionId
				);

				// Retrieve the customer details
				const customer = await stripe.customers.retrieve(customerId);

				console.log(
					`Subscription payment successful for customer ${customer.email}`
				);
				console.log(`Subscription ID: ${subscriptionId}`);
				console.log(`Amount paid: ${invoice.amount_paid}`);

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
export async function DELETE(req) {
	try {
		// Get the user's ID or subscription ID from the request body
		const { stripeCustomerId } = await req.json();

		// Fetch the user's Stripe customer ID from your database
		// const user = await User.findById(userId);
		// const stripeCustomerId = user.stripeCustomerId;

		// Fetch the customer's subscriptions
		const subscriptions = await stripe.subscriptions.list({
			customer: stripeCustomerId,
		});

		if (subscriptions.data.length === 0) {
			return NextResponse.json(
				{ error: "No active subscription found" },
				{ status: 404 }
			);
		}

		// Cancel the subscription
		const subscription = subscriptions.data[0];
		await stripe.subscriptions.cancel(subscription.id);
		// const subscription = await stripe.subscriptions.cancel(
		// 	"sub_1MlPf9LkdIwHu7ixB6VIYRyX"
		// );

		return NextResponse.json({
			message: "Subscription cancelled successfully",
		});
	} catch (error) {
		console.error("Error cancelling subscription:", error);
		return NextResponse.json(
			{ error: "Failed to cancel subscription" },
			{ status: 500 }
		);
	}
	return new Response(`A User unsubscribed!`);
}
