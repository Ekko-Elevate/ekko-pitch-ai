import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getSession } from "@auth0/nextjs-auth0";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
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

	const { priceId } = body;

	if (!priceId) {
		return NextResponse.json(
			{ error: "Missing required parameters" },
			{ status: 400 }
		);
	}

	try {
		const session = await getSession(req);

		if (!session || !session.user) {
			return NextResponse.json({ requiresAuth: true });
		}

		const auth0UserId = session.user.sub;

		const stripeSession = await stripe.checkout.sessions.create({
			mode: "subscription",
			payment_method_types: ["card"],
			line_items: [
				{
					price: priceId,
					quantity: 1,
				},
			],
			//add to whatever endpoint user should be sent to after success full, so maybe add /dashboard or something
			success_url: `${req.headers.get("origin")}`,
			cancel_url: `${req.headers.get("origin")}`,
			subscription_data: {
				metadata: {
					auth0UserId: auth0UserId,
				},
			},
		});

		return NextResponse.json({ url: stripeSession.url });
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
