// app/pricing/page.js
import { getSession } from "@auth0/nextjs-auth0";
import SubscribeButton from "./SubscribeButton";

const plans = [
	{
		link: "https://buy.stripe.com/test_bIY9BP4Lp9rG2Zi145",
		priceId: "price_1PmytHHkDOTpB3SeSeFXIXVo",
		price: 19,
		duration: "/month",
	},
];

export default async function Pricing() {
	return (
		<div className="w-full h-full">
			<section id="pricing">
				<div className="max-w-5xl mx-auto">
					<div className="flex flex-col text-center w-full mb-20">
						<p className="font-medium text-primary mb-5">Pricing</p>
						<h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
							Select A Plan
						</h2>
					</div>
					<div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
						<div className="w-full max-w-lg">
							<div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-xl">
								<div className="flex items-center gap-8">
									<div className="flex items-center gap-2">
										<input
											type="radio"
											name="monthly"
											className="radio"
											checked
											readOnly
										/>
										<span>Pay monthly</span>
									</div>
								</div>

								<div className="flex gap-2">
									<p className="text-5xl tracking-tight font-extrabold">
										${plans[0].price}
									</p>
									<div className="flex flex-col justify-end mb-[4px]">
										<p className="text-sm tracking-wide text-base-content/80 uppercase font-semibold">
											{plans[0].duration}
										</p>
									</div>
								</div>

								<ul className="space-y-2.5 leading-relaxed text-base flex-1">
									{[
										{ name: "EkkoAI BoilerPlate" },
										{ name: "Excellent Customer Support" },
										{ name: "AI Image to Video" },
										{ name: "AI Video Transformation" },
										{ name: "Blawg" },
									].map((feature, i) => (
										<li key={i} className="flex items-center gap-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												className="w-[18px] h-[18px] opacity-80 shrink-0"
											>
												<path
													fillRule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clipRule="evenodd"
												/>
											</svg>
											<span>{feature.name} </span>
										</li>
									))}
								</ul>
								<div className="space-y-2">
									<SubscribeButton priceId={"price_1PmytHHkDOTpB3SeSeFXIXVo"} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
