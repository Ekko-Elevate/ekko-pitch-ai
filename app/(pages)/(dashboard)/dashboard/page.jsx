"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";

export default function Dashboard() {
	const { user, error, isLoading } = useUser();

	useEffect(() => {
		if (user) {
			console.log(user);
		}
	}, [user]);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	return (
		<>
			{user ? (
				<div>
					<div>
						<img
							src={user.picture}
							alt={user.name}
							style={{ borderRadius: "50%" }}
						/>
						<h2>{user.name}</h2>
						<p>{user.email}</p>
					</div>
					<a href="/api/auth/logout">Logout</a>
				</div>
			) : (
				<div>
					<p>You are not logged in.</p>
					<a href="/api/auth/login">Login</a>
				</div>
			)}
		</>
	);
}
