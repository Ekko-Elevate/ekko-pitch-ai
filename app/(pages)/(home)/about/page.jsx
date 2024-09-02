
import React from "react";
import Image from "next/image";

import GIF from "./body-armor.gif";
import SVG from "./linkedin.svg";
export default function About() {
	return (
		<>
			<main>
				<div
					className="relative pt-16 pb-32 flex content-center items-center justify-center"
					style={{
						minHeight: "75vh",
					}}
				>
					<div
						className="absolute top-0 w-full h-full bg-gre bg-cover"
						style={{
							backgroundImage:
								"url('https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
						}}
					>
						<span
							id="blackOverlay"
							className="w-full h-full absolute opacity-75 bg-black"
						></span>
					</div>
					<div className="container relative mx-auto">
						<div className="items-center flex flex-wrap">
							<div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
								<h1 className="text-mag font-semibold text-5xl">
									Everyday Images Into Stunning Ads With Ease
								</h1>
								<p className="mt-4 text-lg text-gray-300">
									We automate the process of converting images into high-quality
									display images and video ads, streamlining your marketing
									efforts.
								</p>
							</div>
						</div>
					</div>
					<div
						className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
						style={{ height: "70px" }}
					>
						<svg
							className="absolute bottom-0 overflow-hidden"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="text-gray-300 fill-current"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>
				</div>

				<section className="pb-20 bg-oxford -mt-16">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap">
							<div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
								<div className="relative flex flex-col min-w-0 break-words bg-mag w-full mb-8 shadow-lg rounded-lg">
									<div className="px-4 py-5 flex-auto">
										<div className="text-mag p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-oxford">
											<i className="fas fa-award"></i>
										</div>
										<h6 className="text-xl font-semibold">Awarded Agency</h6>
										<p className="mt-2 mb-4 text-gray-600">
											Enhance your videos with custom voiceovers and music
											effortlessly
										</p>
									</div>
								</div>
							</div>

							<div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
								<div className="relative flex flex-col min-w-0 break-words bg-mag w-full mb-8 shadow-lg rounded-lg">
									<div className="px-4 py-5 flex-auto">
										<div className="text-mag p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-oxford">
											<i className="fas fa-retweet"></i>
										</div>
										<h6 className="text-xl font-semibold">Free Revisions</h6>
										<p className="mt-2 mb-4 text-gray-600">
											Turn your everyday images into eye-catching display ads in
											seconds.
										</p>
									</div>
								</div>
							</div>

							<div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
								<div className="relative flex flex-col min-w-0 break-words bg-mag w-full mb-8 shadow-lg rounded-lg">
									<div className="px-4 py-5 flex-auto">
										<div className="text-mag p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-oxford">
											<i className="fas fa-fingerprint"></i>
										</div>
										<h6 className="text-xl font-semibold">Verified Company</h6>
										<p className="mt-2 mb-4 text-gray-600">
											Turn images into dynamic videos complete with voiceovers
											and music.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-wrap items-center mt-20">
							<div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
								<h3 className="text-3xl mb-2 font-semibold leading-normal">
									Working with us is a pleasure
								</h3>
								<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-mag">
									Our service helps businesses quickly create professional
									marketing content from their existing assets. We add
									voiceovers and music to videos, turn images into display ads,
									and convert images into video ads. This streamlines content
									creation, enhances brand consistency, and boosts audience
									engagement, helping your business stand out.
								</p>
							</div>

							<div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
								<div className="relative flex flex-col min-w-0 break-words bg-mag w-full mb-6 shadow-lg rounded-lg">
									<Image src={GIF} alt="my gif" />
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="pt-20 pb-28">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap justify-center text-center mb-24">
							<div className="w-full lg:w-6/12 px-4">
								<h2 className="text-4xl font-semibold">
									Here Are Our founders
								</h2>
							</div>
						</div>
						<div className="flex flex-wrap">
							<div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
								<div className="px-6">
									<img
										alt="..."
										src={
											"https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
										}
										className="shadow-lg rounded-full max-w-full mx-auto"
										style={{ maxWidth: "120px" }}
									/>
									<div className="pt-6 text-center">
										<h5 className="text-xl font-bold">Omar Khan</h5>
										<p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
											Full Stack Web Developer
										</p>
										<div className="mt-6">
											<button
												className=" text-mag w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
												type="button"
											>
												<a
													href="https://www.linkedin.com/in/omar-khan-4317b1233/"
													target="_blank"
													rel="noopener noreferrer"
												>
													<Image
														priority
														src={SVG}
														alt="Follow us on Twitter"
													/>
												</a>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
								<div className="px-6">
									<img
										alt="..."
										src={
											"https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
										}
										className="shadow-lg rounded-full max-w-full mx-auto"
										style={{ maxWidth: "120px" }}
									/>
									<div className="pt-6 text-center">
										<h5 className="text-xl font-bold">Carolina Campos</h5>
										<p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
											Full Stack Web Developer
										</p>
										<div className="mt-6">
											<button
												className=" text-mag w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
												type="button"
											>
												<a
													href="https://www.linkedin.com/in/carolina-campos04/"
													target="_blank"
													rel="noopener noreferrer"
												>
													<Image
														priority
														src={SVG}
														alt="Follow us on Twitter"
													/>
												</a>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
								<div className="px-6">
									<img
										alt="..."
										src={
											"https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
										}
										className="shadow-lg rounded-full max-w-full mx-auto"
										style={{ maxWidth: "120px" }}
									/>
									<div className="pt-6 text-center">
										<h5 className="text-xl font-bold">Aaron Tran</h5>
										<p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
											Full Stack Web Developer
										</p>
										<div className="mt-6">
											<button
												className=" text-mag w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
												type="button"
											>
												<a
													href="https://www.linkedin.com/in/aarontran4/"
													target="_blank"
													rel="noopener noreferrer"
												>
													<Image
														priority
														src={SVG}
														alt="Follow us on Twitter"
													/>
												</a>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
								<div className="px-6">
									<img
										alt="..."
										src={
											"https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
										}
										className="shadow-lg rounded-full max-w-full mx-auto"
										style={{ maxWidth: "120px" }}
									/>
									<div className="pt-6 text-center">
										<h5 className="text-xl font-bold">Michael Kalai</h5>
										<p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
											Full Stack Web Developer
										</p>
										<div className="mt-6">
											<button
												className=" text-mag w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
												type="button"
											>
												<a
													href="https://www.linkedin.com/in/michael-w-kalai/"
													target="_blank"
													rel="noopener noreferrer"
												>
													<Image
														priority
														src={SVG}
														alt="Follow us on Twitter"
													/>
												</a>{" "}
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

