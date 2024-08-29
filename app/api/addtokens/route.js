//calls function
import { editTokens } from "@/app/_lib/mongoDB/utils/edittokens.js";
// import { Billing } from "@/app/_lib/mongoDB/models/billing.js";

export default async function POST(req, res) {
	const { UID, tokenAmount } = req.body;
	try {
		const result = await editTokens(UID, tokenAmount);
		if (result === null) {
			return res
				.status(400)
				.json({ error: "Token amount is invalid or user not found" });
		}
		res.status(200).json({ message: "Tokens updated successfully" });
	} catch (error) {
		console.error("error");
		res.status(500).json({ error: "Internal Server Error" });
	}
}
