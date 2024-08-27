import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo.jpg";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import bodyGIF from "./body-armor.gif";
import beachGIF from "./celsius-beach.gif";
import poolGIF from "./celsius-pool.gif";
import quandale from "./maxresdefault.jpg";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import GraphicEqOutlinedIcon from "@mui/icons-material/GraphicEqOutlined";
import picnic from "./perfect-picnic.jpg";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";

export default function Home() {
	return (
		<div>
			<div
				className="relative flex flex-col overflow-hidden justify-center h-[60vh] bg-cover bg-center"
				style={{ backgroundImage: "url('/background.jpg')" }}
			>
				{/* Black overlay */}
				<div className="absolute w-full h-full inset-0 bg-black opacity-80"></div>
				<div className="relative h-[60%] flex flex-col items-center justify-center">
					<h1 className="text-center mb-6 text-5xl md:text-6xl font-semibold">
						Get to work, with a lots less work
					</h1>
					<p className="w-fit md:w-1/2 text-xl md:text-2xl text-center mb-12">
						Dropbox delivers tools that help you move your work forward faster,
						keep it safe, and let you collaborate with ease.
					</p>
					<div className="flex flex-row justify-between space-x-4 mb-20">
						<Link href="/sign-up" className="flex items-center">
							<button className="font-bold text-lg bg-[#fff7db] text-black px-14 py-6 rounded-2xl hover:bg-gray-400 cursor-pointer">
								Sign up free
								<ArrowForwardOutlinedIcon className="ml-5" />
							</button>
						</Link>
					</div>
				</div>
			</div>
			{/*main stuff type shit*/}
			<div className="flex flex-col overflow-hidden w-full h-auto bg-[#fff9EB] px-6 md:px-12 lg:px-24 gap-16 md:gap-28 py-12 md:py-24">
				<div className="flex flex-col lg:flex-row justify-center items-center w-full gap-8 md:gap-16">
					<div className="flex flex-col gap-4 md:gap-6 w-full lg:w-4/12">
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A]">
							Everything you want, created in minutes.
						</h1>
						<p className="text-xl md:text-2xl font-semibold text-[#0F172A]">
							Your favorite local restaurants
						</p>
						<p className="text-[#0F172A] font-medium">
							Get a slice of pizza or the whole pie delivered, or pick up house
							lo mein from the Chinese takeout spot you've been meaning to try
						</p>
						<div className="gap-4 md:gap-6 flex flex-wrap items-center">
							<Link href="sign-up">
								<button className="font-bold text-md md:text-lg bg-[#02254D] text-white px-4 md:px-5 py-2 rounded-full hover:bg-gray-400 cursor-pointer">
									Try free <ArrowForwardOutlinedIcon className="ml-1" />
								</button>
							</Link>
							<Link href="sign-in">
								<span className="font-bold text-sm md:text-md lg:underline lg:underline-offset-4 lg:decoration-1 text-black cursor-pointer inline">
									Already have an account? Sign in
								</span>
							</Link>
						</div>
					</div>
					<div className="w-full md:w-auto h-auto">
						<Image src={picnic} className="justify-center" />
					</div>
				</div>
				<div className="flex flex-col lg:flex-row justify-center items-center w-full gap-8 md:gap-16">
					<div className="w-full md:w-auto h-auto">
						<Image src={picnic} className="justify-center" />
					</div>
					<div className="flex flex-col gap-4 md:gap-6 w-full md:w-full lg:w-4/12">
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A]">
							Everything you want, created in minutes.
						</h1>
						<p className="text-xl md:text-2xl font-semibold text-[#0F172A]">
							Your favorite local restaurants
						</p>
						<p className="text-[#0F172A] font-medium">
							Get a slice of pizza or the whole pie delivered, or pick up house
							lo mein from the Chinese takeout spot you've been meaning to try
						</p>
						<Link href="sign-up">
							<button className="font-bold text-md md:text-lg bg-[#02254D] text-white px-4 md:px-5 py-2 rounded-full hover:bg-gray-400 cursor-pointer">
								Get creating <SlideshowOutlinedIcon className="ml-1" />
							</button>
						</Link>
					</div>
				</div>
			</div>

			{/*Filler steps*/}
			<div className="flex flex-col overflow-hidden p-16 px-4 md:px-8 lg:px-16 xl:px-64 h-auto w-full bg-[#02254D]">
				<h1 className="text-[#fff7db] text-3xl sm:text-4xl md:text-5xl font-bold text-wrap w-fit xl:w-1/2 mt-20">
					High quality AI generated advertisements for your business
				</h1>
				<p className="w-full xl:w-1/2">
					Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
					Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
				</p>

				{/* Card 1 */}
				<div className="flex flex-col lg:flex-row lg:justify-end w-full mt-8">
					<div className="bg-gray-200 border-2 rounded-3xl w-full lg:w-5/12 h-fit py-10 px-10">
						<h1 className="text-4xl text-[#0F172A] font-bold pb-8">
							Video Creation <VideocamOutlinedIcon className="text-6xl" />
						</h1>
						<p className="pb-8 text-[#0F172A] leading-loose">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean
							et tortor at risus viverra adipiscing at in.
						</p>
						<div className="pb-8">
							<Image
								src={quandale}
								width={1280}
								height={720}
								className="rounded-3xl justify-center"
							/>
						</div>
						<Link href="about">
							<button className="font-bold text-lg bg-[#fff7db] text-[#02254D] px-4 py-2 rounded-full hover:bg-gray-400 cursor-pointer">
								Learn more <ArrowForwardOutlinedIcon className="ml-1" />
							</button>
						</Link>
					</div>
				</div>

				{/* Card 2 */}
				<div className="flex flex-col lg:flex-row lg:justify-start w-full lg:relative lg:-mt-96 mt-8">
					<div className="bg-gray-200 border-2 rounded-3xl w-full lg:w-5/12 h-fit py-10 px-10">
						<h1 className="text-4xl text-[#0F172A] font-bold pb-8">
							Audio Creation <VolumeUpOutlinedIcon className="text-5xl" />
						</h1>
						<p className="pb-8 text-[#0F172A] leading-loose">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean
							et tortor at risus viverra adipiscing at in.
						</p>
						<div className="pb-8">
							<Image
								src={quandale}
								width={1280}
								height={720}
								className="rounded-3xl justify-center"
							/>
						</div>
						<Link href="about">
							<button className="font-bold text-lg bg-[#fff7db] text-[#02254D] px-4 py-2 rounded-full hover:bg-gray-400 cursor-pointer">
								Learn more <ArrowForwardOutlinedIcon className="ml-1" />
							</button>
						</Link>
					</div>
				</div>

				{/* Card 3 */}
				<div className="flex flex-col lg:flex-row lg:justify-end w-full lg:relative lg:-mt-24 mt-8">
					<div className="bg-gray-200 border-2 rounded-3xl w-full lg:w-5/12 h-fit py-10 px-10">
						<h1 className="text-4xl text-[#0F172A] font-bold pb-8">
							Voice Creation <GraphicEqOutlinedIcon className="text-5xl" />
						</h1>
						<p className="pb-8 text-[#0F172A] leading-loose">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean
							et tortor at risus viverra adipiscing at in.
						</p>
						<div className="pb-8">
							<Image
								src={quandale}
								width={1280}
								height={720}
								className="rounded-3xl justify-center"
							/>
						</div>
						<Link href="about">
							<button className="font-bold text-lg bg-[#fff7db] text-[#02254D] px-4 py-2 rounded-full hover:bg-gray-400 cursor-pointer">
								Learn more <ArrowForwardOutlinedIcon className="ml-1" />
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="flex flex-col overflow-hidden items-center h-auto w-full bg-[#fff9EB]">
				<h1 className="pt-20 text-5xl md:text-5xl text-center font-semibold text-[#010102] w-auto md:w-5/12">
					Professional advertisements without the hassle
				</h1>
				<div className="px-4 xl:px-36 2xl:px-60 py-32 w-full h-full">
					<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 h-auto w-auto">
						<div className="flex flex-col border-b-2 md:border-r-2 md:border-b-2 border-gray-400 items-center justify-center px-8 2xl:px-16 py-20 gap-16">
							<GraphicEqOutlinedIcon className="text-6xl text-gray-600" />
							<div className="flex flex-col items-center justify-center text-center w-full gap-6">
								<h1 className="text-3xl font-semibold text-[#010102]">
									Create clips with ease
								</h1>
								<p className="text-lg font-normal text-gray-600">
									Lorem ipsum dolor sit amet consequat facilisis consequat
									ultrices suspendisse faucibus mauris
								</p>
							</div>
							<Link href="about">
								<button className="font-bold text-lg border border-black text-[#02254D] px-4 py-2 hover:bg-gray-400 cursor-pointer">
									Learn more <ArrowForwardOutlinedIcon className="ml-1" />
								</button>
							</Link>
						</div>
						<div className="flex flex-col border-b-2 md:border-r-2 md:border-b-2 border-gray-400 items-center justify-center px-8 2xl:px-16 py-20 gap-16">
							<GraphicEqOutlinedIcon className="text-6xl text-gray-600" />
							<div className="flex flex-col items-center justify-center text-center w-full gap-6">
								<h1 className="text-3xl font-semibold text-[#010102]">
									Create clips with ease
								</h1>
								<p className="text-lg font-normal text-gray-600">
									Lorem ipsum dolor sit amet consequat facilisis consequat
									ultrices suspendisse faucibus mauris
								</p>
							</div>
							<Link href="about">
								<button className="font-bold text-lg border border-black text-[#02254D] px-4 py-2 hover:bg-gray-400 cursor-pointer">
									Learn more <ArrowForwardOutlinedIcon className="ml-1" />
								</button>
							</Link>
						</div>
						<div className="flex flex-col border-b-2 md:border-b-2 border-gray-400 items-center justify-center px-8 2xl:px-16 py-20 gap-16">
							<GraphicEqOutlinedIcon className="text-6xl text-gray-600" />
							<div className="flex flex-col items-center justify-center text-center w-full gap-6">
								<h1 className="text-3xl font-semibold text-[#010102]">
									Create clips with ease
								</h1>
								<p className="text-lg font-normal text-gray-600">
									Lorem ipsum dolor sit amet consequat facilisis consequat
									ultrices suspendisse faucibus mauris
								</p>
							</div>
							<Link href="about">
								<button className="font-bold text-lg border border-black text-[#02254D] px-4 py-2 hover:bg-gray-400 cursor-pointer">
									Learn more <ArrowForwardOutlinedIcon className="ml-1" />
								</button>
							</Link>
						</div>
						<div className="flex flex-col border-b-2 md:border-b-0  md:border-r-2 border-gray-400 items-center justify-center px-8 2xl:px-16 py-20 gap-16">
							<GraphicEqOutlinedIcon className="text-6xl text-gray-600" />
							<div className="flex flex-col items-center justify-center text-center w-full gap-6">
								<h1 className="text-3xl font-semibold text-[#010102]">
									Create clips with ease
								</h1>
								<p className="text-lg font-normal text-gray-600">
									Lorem ipsum dolor sit amet consequat facilisis consequat
									ultrices suspendisse faucibus mauris
								</p>
							</div>
							<Link href="about">
								<button className="font-bold text-lg border border-black text-[#02254D] px-4 py-2 hover:bg-gray-400 cursor-pointer">
									Learn more <ArrowForwardOutlinedIcon className="ml-1" />
								</button>
							</Link>
						</div>
						<div className="flex flex-col border-b-2 md:border-b-0 md:border-r-2 border-gray-400 items-center justify-center px-8 2xl:px-16 py-20 gap-16">
							<GraphicEqOutlinedIcon className="text-6xl text-gray-600" />
							<div className="flex flex-col items-center justify-center text-center w-full gap-6">
								<h1 className="text-3xl font-semibold text-[#010102]">
									Create clips with ease
								</h1>
								<p className="text-lg font-normal text-gray-600">
									Lorem ipsum dolor sit amet consequat facilisis consequat
									ultrices suspendisse faucibus mauris
								</p>
							</div>
							<Link href="about">
								<button className="font-bold text-lg border border-black text-[#02254D] px-4 py-2 hover:bg-gray-400 cursor-pointer">
									Learn more <ArrowForwardOutlinedIcon className="ml-1" />
								</button>
							</Link>
						</div>
						<div className="flex flex-col  items-center justify-center px-8 2xl:px-16 py-20 gap-16">
							<GraphicEqOutlinedIcon className="text-6xl text-gray-600" />
							<div className="flex flex-col items-center justify-center text-center w-full gap-6">
								<h1 className="text-3xl font-semibold text-[#010102]">
									Create clips with ease
								</h1>
								<p className="text-lg font-normal text-gray-600">
									Lorem ipsum dolor sit amet consequat facilisis consequat
									ultrices suspendisse faucibus mauris
								</p>
							</div>
							<Link href="about">
								<button className="font-bold text-lg border border-black text-[#02254D] px-4 py-2 hover:bg-gray-400 cursor-pointer">
									Learn more <ArrowForwardOutlinedIcon className="ml-1" />
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
