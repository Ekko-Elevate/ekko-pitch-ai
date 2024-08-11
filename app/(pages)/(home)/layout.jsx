import Link from "next/link";

export default function Layout({ children }) {
	return (
		<>
			<header style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
				<h1>Generic Company Name</h1>
				<nav>
					<Link href="/">Home</Link>
					<Link href="/contact">Contact</Link>
				</nav>
			</header>
			<main style={{ flex: 1 }}>{children}</main>
			<footer
				style={{
					padding: "1rem",
					backgroundColor: "#f0f0f0",
					marginTop: "auto",
				}}
			>
				<p>© 2024 Generic Company Name. All rights reserved.</p>
				<p>123 Business Street, City, State 12345</p>
				<p>Phone: (555) 123-4567 | Email: info@genericcompany.com</p>
			</footer>
		</>
	);
}
