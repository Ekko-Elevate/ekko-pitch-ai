import { connectToDatabase } from "@/app/_lib/mongoDB/connection/db.js";
import { Billing } from "@/app/_lib/mongoDB/models/billing.js";
//will add more functionality once we have more subscription plans
export async function getCustomerID(UID) {
	await connectToDatabase();

	try {
		const billing = await Billing.findOne({ UID });
		if (billing) {
			return billing.customerID;
		} else {
			return null;
		}
	} catch (error) {
		console.error("Error in getCustomerId:", error);
		throw error;
	}
}
