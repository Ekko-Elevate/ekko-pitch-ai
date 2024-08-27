"use client";
import { useState, useEffect } from "react";

const posts = [
	{ title: "Future of AI in 2025", uploadDate: "2024-08-25" },
	{ title: "New Space Station Launched", uploadDate: "2024-08-20" },
	{ title: "Global Climate Summit 2024", uploadDate: "2024-08-15" },
	{ title: "Breakthrough in Quantum Computing", uploadDate: "2024-08-10" },
	{ title: "Olympic Games 2024 Recap", uploadDate: "2024-08-05" },
	{ title: "Advancements in Renewable Energy", uploadDate: "2024-07-30" },
	{ title: "Future of AI in 2025", uploadDate: "2024-08-25" },
	{ title: "New Space Station Launched", uploadDate: "2024-08-20" },
	{ title: "Global Climate Summit 2024", uploadDate: "2024-08-15" },
	{ title: "Breakthrough in Quantum Computing", uploadDate: "2024-08-10" },
	{ title: "Olympic Games 2024 Recap", uploadDate: "2024-08-05" },
	{ title: "Advancements in Renewable Energy", uploadDate: "2024-07-30" },
	{ title: "Future of AI in 2025", uploadDate: "2024-08-25" },
	{ title: "New Space Station Launched", uploadDate: "2024-08-20" },
	{ title: "Global Climate Summit 2024", uploadDate: "2024-08-15" },
	{ title: "Breakthrough in Quantum Computing", uploadDate: "2024-08-10" },
	{ title: "Olympic Games 2024 Recap", uploadDate: "2024-08-05" },
	{ title: "Advancements in Renewable Energy", uploadDate: "2024-07-30" },
	{ title: "Future of AI in 2025", uploadDate: "2024-08-25" },
	{ title: "New Space Station Launched", uploadDate: "2024-08-20" },
	{ title: "Global Climate Summit 2024", uploadDate: "2024-08-15" },
	{ title: "Breakthrough in Quantum Computing", uploadDate: "2024-08-10" },
	{ title: "Olympic Games 2024 Recap", uploadDate: "2024-08-05" },
	{ title: "Advancements in Renewable Energy", uploadDate: "2024-07-30" },
	{ title: "Future of AI in 2025", uploadDate: "2024-08-25" },
	{ title: "New Space Station Launched", uploadDate: "2024-08-20" },
	{ title: "Global Climate Summit 2024", uploadDate: "2024-08-15" },
	{ title: "Breakthrough in Quantum Computing", uploadDate: "2024-08-10" },
	{ title: "Olympic Games 2024 Recap", uploadDate: "2024-08-05" },
	{ title: "Advancements in Renewable Energy", uploadDate: "2024-07-30" },
	{ title: "Future of AI in 2025", uploadDate: "2024-08-25" },
	{ title: "New Space Station Launched", uploadDate: "2024-08-20" },
	{ title: "Global Climate Summit 2024", uploadDate: "2024-08-15" },
	{ title: "Breakthrough in Quantum Computing", uploadDate: "2024-08-10" },
	{ title: "Olympic Games 2024 Recap", uploadDate: "2024-08-05" },
	{ title: "Advancements in Renewable Energy", uploadDate: "2024-07-30" },
];

export default function Dashboard() {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Simulating API call
				const result = posts;
				console.log(result);
				setData(result);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!data) return <div>No data found</div>;

	return (
		<div className="container mx-auto px-4">
			<h1 className="text-4xl font-bold text-center my-8">Gallery</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{data.map((post, index) => (
					<div
						key={index}
						className="flex flex-col items-center border p-4 rounded-lg shadow"
					>
						<h2 className="text-xl font-semibold">{post.title}</h2>
						<p className="text-gray-600">{post.uploadDate}</p>
					</div>
				))}
			</div>
		</div>
	);
}
