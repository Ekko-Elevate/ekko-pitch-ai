import Nav from "./nav.jsx";

export default function DashboardLayout({ children }) {
	return (
		<div className="flex h-screen w-screen overflow-hidden">
			<Nav />
			<main className="flex-1 overflow-y-auto">{children}</main>
		</div>
	);
}
