import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export const POST = withApiAuthRequired(async function paymentRoute(req) {
	// Parse the request body
	let body;
	try {
		body = await req.json();
	} catch (error) {
		console.error("Failed to parse request body:", error);
		return NextResponse.json(
			{ error: "Invalid request body" },
			{ status: 400 }
		);
	}

	const { priceId, auth0UserId } = body;

	if (!priceId || !auth0UserId) {
		return NextResponse.json(
			{ error: "Missing required parameters" },
			{ status: 400 }
		);
	}

	try {
		const session = await stripe.checkout.sessions.create({
			mode: "subscription",
			payment_method_types: ["card"],
			line_items: [
				{
					price: priceId,
					quantity: 1,
				},
			],
			//append this to end /success?session_id={CHECKOUT_SESSION_ID}
			success_url: `${req.headers.get("origin")}`,
			//append this to the end /canceled
			cancel_url: `${req.headers.get("origin")}`,
			subscription_data: {
				metadata: {
					auth0UserId: auth0UserId,
				},
			},
		});

		return NextResponse.json({ url: session.url });
	} catch (error) {
		console.error("Stripe error:", error);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
});
