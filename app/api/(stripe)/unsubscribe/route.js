import { NextResponse } from "next/server";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { getCustomerID } from "@/app/_lib/mongoDB/utils/getcustomerID.js";
import { removeBilling } from "@/app/_lib/mongoDB/utils/removebilling.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const DELETE = withApiAuthRequired(async function unsubscribe(req) {
	try {
		const session = await getSession(req);
		const user = session.user;
		console.log(user);

		const stripeCustomerID = await getCustomerID(user.sub);
		console.log(stripeCustomerID);

		const subscriptions = await stripe.subscriptions.list({
			customer: stripeCustomerID,
		});

		if (subscriptions.data.length === 0) {
			return NextResponse.json(
				{ error: "No active subscription found" },
				{ status: 404 }
			);
		}

		console.log("///////////////////////////////////////");
		console.log(subscriptions.data);

		const subscription = subscriptions.data[0];
		await stripe.subscriptions.cancel(subscription.id);

		await removeBilling(stripeCustomerID);

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
});
