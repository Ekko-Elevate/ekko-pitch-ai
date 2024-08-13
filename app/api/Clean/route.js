import {connectToDatabase} from "../../_lib/mongoDB/db.js";
import {User} from "../../_lib/mongoDB/user.js";
import { NextResponse } from "next/server.js";

export async function GET(req, res) {
	await connectToDatabase();

	const newUser = new User({
	  UID: 'edp445',
	  useremail: 'john.doe@example.com',
	  password: 'securepassword',
	  subscription: 'enterprise',
	  token_amount: 3,
	  CID: [1,2,3]
	});
  
	try {
	  const savedUser = await newUser.save();
	  console.log('User added:', savedUser);
	  return NextResponse.json("success");
	} catch (error) {
	  console.error('Error adding user:', error);
	}
}

