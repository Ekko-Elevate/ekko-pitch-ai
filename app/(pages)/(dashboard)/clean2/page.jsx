import React from "react";
import classNames from "classnames"; // Import classnames utility

export default function About() {
	// Static billing interval and products for display purposes
	const billingInterval = "month";
	const products = [
		{
			id: "prod_1",
			name: "Freelancer",
			description: "A plan for freelancers.",
			prices: [
				{
					id: "price_month_1",
					interval: "month",
					unit_amount: 1000,
					currency: "USD",
				},
				{
					id: "price_year_1",
					interval: "year",
					unit_amount: 10000,
					currency: "USD",
				},
			],
		},
		{
			id: "prod_2",
			name: "Small Business",
			description: "A plan for small businesses.",
			prices: [
				{
					id: "price_month_2",
					interval: "month",
					unit_amount: 2000,
					currency: "USD",
				},
				{
					id: "price_year_2",
					interval: "year",
					unit_amount: 20000,
					currency: "USD",
				},
			],
		},
	];

	return (
		<>
			<nav className="sticky top-0 w-full h-20 shadow-xl bg-[#02254D] z-50">
				<div className="w-full h-full flex justify-between items-center px-4 sm:px-8 md:px-20"></div>
			</nav>
			<section className="bg-black">
				<div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
					<div className="sm:flex sm:flex-col sm:align-center">
						<h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
							Pricing Plans
						</h1>
						<p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl">
							Start building for free, then add a site plan to go live. Account
							plans unlock additional features.
						</p>
					</div>
					<div className="mt-12 space-y-0 sm:mt-16 flex flex-wrap justify-center gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
						{products.map((product) => {
							const price = product.prices.find(
								(price) => price.interval === billingInterval
							);
							if (!price) return null;
							const priceString = new Intl.NumberFormat("en-US", {
								style: "currency",
								currency: price.currency,
								minimumFractionDigits: 0,
							}).format((price.unit_amount || 0) / 100);
							return (
								<div
									key={product.id}
									className={classNames(
										"flex flex-col rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900",
										"flex-1",
										"basis-1/3",
										"max-w-xs"
									)}
								>
									<div className="p-6 bg-oxford hover:border-2">
										<h2 className="text-2xl font-semibold leading-6 text-white">
											{product.name}
										</h2>
										<p className="mt-4 text-zinc-300">{product.description}</p>
										<p className="mt-8">
											<span className="text-5xl font-extrabold white">
												{priceString}
											</span>
											<span className="text-base font-medium text-zinc-100">
												/{billingInterval}
											</span>
										</p>
										<button
											type="button"
											className="block w-full py-2 mt-8 text-sm font-semibold text-center text-white rounded-md hover:bg-zinc-900"
										>
											Subscribe
										</button>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}
