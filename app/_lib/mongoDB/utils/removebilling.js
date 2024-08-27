import { connectToDatabase } from "@/app/_lib/mongoDB/connection/db.js";
import { Billing } from "@/app/_lib/mongoDB/models/billing.js";

export async function removeBilling(customerID) {
	await connectToDatabase();

	try {
		// Find and delete the billing record with the given customerID
		const result = await Billing.findOneAndDelete({ customerID });

		if (!result) {
			throw new Error("trying to delete missing billing record");
			// return {
			// 	success: false,
			// 	message: "No billing record found with the given customerID",
			// };
		}

		// return {
		// 	success: true,
		// 	message: "Billing record deleted successfully",
		// 	deletedRecord: result,
		// };
	} catch (error) {
		console.error("Error in deleteBillingByCustomerId:", error);
		throw new Error("Failed to delete billing record");
	}
}
