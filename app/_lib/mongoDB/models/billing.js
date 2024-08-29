const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema(
	{
		UID: {
			type: String,
			required: true,
			unique: true,
		},
		customerID: {
			type: String,
			required: true,
			unique: true,
		},
		subscriptionID: String,
	},
	{ collection: "billings" }
);

// export const Billing = mongoose.model("Billing", billingSchema);
export const Billing =
	mongoose.models.Billing || mongoose.model("Billing", billingSchema);
