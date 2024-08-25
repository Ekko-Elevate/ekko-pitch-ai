import { handleAuth, handleLogin, handleCallback } from "@auth0/nextjs-auth0";

import { addNewUser } from "@/app/_lib/mongoDB/utils/addnewuser.js";
//session is basically information about user being logged in here is documentation:https://auth0.github.io/nextjs-auth0/types/handlers_callback.AfterCallbackAppRoute.html
//session must be the middle item, we use the "_" to ignore the 1st and 3rd parameter.
const afterCallback = (_, session, __) => {
	console.log(session.user);
	console.log("michael");
	addNewUser(session.user.sub, session.user.email);
	return session;
};

export const GET = handleAuth({
	login: handleLogin({
		returnTo: (req) => req.query.returnTo || "/dashboard",
	}),
	callback: handleCallback({ afterCallback }),
});
