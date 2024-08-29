import { connectToDatabase } from "@/app/_lib/mongoDB/connection/db.js";
import { Billing } from "@/app/_lib/mongoDB/models/billing.js";

export async function addBilling(UID, customerID, subscriptionID) {
	await connectToDatabase();

	try {
		// Check if the user already exists
		const existingBilling = await Billing.findOne({ UID });

		if (existingBilling) {
			return;
		}

		// Create a new user if they don't exist
		const billing = await Billing.create({
			UID,
			customerID,
			subscriptionID,
		});
		return;
	} catch (error) {
		console.error("Error in addUser:", error);
		throw error;
	}
}
