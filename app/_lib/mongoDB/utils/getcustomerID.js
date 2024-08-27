//will add more functionality once we have more subscription plans
async function getCustomerID(UID) {
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
