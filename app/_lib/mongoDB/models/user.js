const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		UID: String,
		userEmail: String,
		subscription: String,
		tokenAmount: Number,
		S3IDs: [String],
	},
	{ collection: "users" }
);

export const User = mongoose.model("User", userSchema);
