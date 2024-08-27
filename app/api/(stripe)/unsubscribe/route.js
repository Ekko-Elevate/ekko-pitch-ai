import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { getCustomerID } from "@/app/_lib/mongoDB/utils/getcustomerID.js";
import { removeBilling } from "@/app/_lib/mongoDB/utils/removebilling.js";

export const config = {
	api: {
		bodyParser: false,
	},
};
//with api auth required users MUST be signed in and api can only really be made from frontend.
export const DELETE = withApiAuthRequired(async function unsubscribe(req) {
	try {
		// Get the user's ID or subscription ID from the request body
		const session = await getSession(req);
		const user = session.user;
		console.log(user);
		// Fetch the user's Stripe customer ID from your database
		// const user = await User.findById(userId);
		const stripeCustomerID = await getCustomerID(user.sub);

		// Fetch the customer's subscriptions
		const subscriptions = await stripe.subscriptions.list({
			customer: stripeCustomerID,
		});

		if (subscriptions.data.length === 0) {
			return NextResponse.json(
				{ error: "No active subscription found" },
				{ status: 404 }
			);
		}

		// Cancel the subscription
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
	return new Response(`A User unsubscribed!`);
});
