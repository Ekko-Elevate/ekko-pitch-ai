const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema(
	{
		UID: String,
		customerID: {
			type: String,
			required: true,
			unique: true,
		},
		subscriptionID: String,
	},
	{ collection: "billings" }
);

export const Billing = mongoose.model("Billing", billingSchema);
