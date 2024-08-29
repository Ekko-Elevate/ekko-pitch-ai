import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		//uid and email given by auth0 as "sub" and "email" respectively
		UID: {
			type: String,
			required: true,
			unique: true,
		},
		userEmail: String,
		subscription: String,
		tokenAmount: Number,
		S3IDs: [String],
	},
	{ collection: "users" }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
