// app/pricing/SubscribeButton.jsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function SubscribeButton({ priceId }) {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const { user, isLoading: userLoading } = useUser();

	// app/pricing/SubscribeButton.jsx
	const handleSubscribe = async () => {
		setIsLoading(true);

		try {
			const response = await fetch("/api/payment", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					priceId: priceId,
				}),
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();

			if (data.requiresAuth) {
				// User is not authenticated, redirect to login with returnTo parameter
				router.push(`/api/auth/login?returnTo=/account/subscription`);
			} else if (data.url) {
				// User is authenticated, redirect to Stripe checkout
				window.location.href = data.url;
			} else {
				throw new Error("Unexpected response from server");
			}
		} catch (error) {
			console.error("Error creating checkout session:", error);
			// Handle the error (e.g., show an error message to the user)
		} finally {
			setIsLoading(false);
		}
	};

	if (userLoading) {
		return (
			<button className="btn btn-primary btn-block" disabled>
				Loading...
			</button>
		);
	}

	return (
		<button
			className="btn btn-primary btn-block"
			onClick={handleSubscribe}
			disabled={isLoading}
		>
			{isLoading ? "Loading..." : user ? "Subscribe" : "Login to Purchase"}
		</button>
	);
}
