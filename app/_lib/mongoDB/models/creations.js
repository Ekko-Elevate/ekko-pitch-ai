const mongoose = require("mongoose");

const creationSchema = new mongoose.Schema(
	{
		UID: String,
		S3ID: String,
		Title: String,
	},
	{ collection: "creations" }
);

export const Creation = mongoose.model("Creation", creationSchema);
