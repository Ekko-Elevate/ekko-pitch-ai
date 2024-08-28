const mongoose = require("mongoose");

const creationSchema = new mongoose.Schema(
	{
		UID: String,
		S3ID: {
			type: String,
			required: true,
			unique: true,
		},
		title: String,
		createdAt: { type: Date, default: Date.now }, // Add this line
	},
	{ collection: "creations" }
);

export const Creation =
	mongoose.models.Creation || mongoose.model("Creation", creationSchema);
