const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema(
	{
		UID: String,
		customerID: String,
		subscriptionID: String,
	},
	{ collection: "billings" }
);

export const Billing = mongoose.model("Billing", billingSchema);
