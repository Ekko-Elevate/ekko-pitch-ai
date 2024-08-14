"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function UnSubscribeButton() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const router = useRouter();

	const handleCancelSubscription = async () => {
		if (
			!confirm(
				"Are you sure you want to cancel your subscription? You'll lose access to all premium features."
			)
		) {
			return;
		}

		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch("/api/webhook/stripe", {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				// You might need to send some data, like a user ID or subscription ID
				body: JSON.stringify({ stripeCustomerId: "cus_QefnqEzxgMptxJ" }),
			});

			if (!response.ok) {
				throw new Error("Failed to cancel subscription");
			}

			const data = await response.json();
			console.log("Subscription cancelled:", data);

			// Show a success message or redirect
			alert("Your subscription has been successfully cancelled.");
			// Optionally, redirect to a confirmation page
			// router.push('/subscription-cancelled');
		} catch (err) {
			setError(err.message);
			alert(`Error: ${err.message}`);
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<>
			<button
				onClick={handleCancelSubscription}
				disabled={isLoading}
				className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
			>
				{isLoading ? "Cancelling..." : "Cancel Subscription"}
			</button>

			{error && (
				<div className="mt-2 text-red-600" role="alert">
					<span className="block sm:inline">{error}</span>
				</div>
			)}
		</>
	);
}
