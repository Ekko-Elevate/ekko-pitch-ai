import Link from "next/link";

const posts = [
	{ title: "Image to Video", link: "/imgtovid" },
	{ title: "Video to Video", link: "/vidtovid" },
];

export default function Dashboard() {
	return (
		<div className="container mx-auto px-4 bg-red">
			<h1 className="text-4xl font-bold text-center my-8">Dashboard</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{posts.map((post, index) => (
					<Link href={post.link} key={index}>
						<div className="flex flex-col items-center border p-4 rounded-lg shadow cursor-pointer hover:bg-gray-100 transition-colors duration-200">
							<h2 className="text-xl font-semibold">{post.title}</h2>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
