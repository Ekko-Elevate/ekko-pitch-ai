import { connectToDatabase } from "../../_lib/mongoDB/connection/db.js";
import { User } from "../../_lib/mongoDB/models/user.js";
import { NextResponse } from "next/server.js";

export async function GET(req, res) {
	await connectToDatabase();
	const { UID, useremail, password, subscription, token_amount, CID } =
		await req.json();

	const newUser = new User({
		UID,
		useremail,
		password,
		subscription,
		token_amount: parseInt(token_amount),
		CID: CID.map(Number), // Assuming CID is an array of numbers
	});
	try {
		const savedUser = await newUser.save();
		console.log("User added:", savedUser);
		return NextResponse.json("success");
	} catch (error) {
		console.error("Error adding user:", error);
		return NextResponse.json("error");
	}
}
