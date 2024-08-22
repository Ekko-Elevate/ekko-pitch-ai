import Link from 'next/link'; 
import Image from 'next/image'; 
import Logo from './Logo.jpg'; 
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import bodyGIF from './body-armor.gif';
import beachGIF from './celsius-beach.gif';
import poolGIF from './celsius-pool.gif';
import quandale from './maxresdefault.jpg';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import picnic from './perfect-picnic.jpg';

export default function Home() {
	return (
		<div>
			<div className="relative flex flex-col overflow-hidden justify-center h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}> 
				{/* Black overlay */}
  				<div className="absolute w-full h-full inset-0 bg-black opacity-85"></div>
				<div className="relative h-[60%] flex flex-col items-center justify-center">
					<h1 className="text-center mb-6 text-5xl md:text-6xl font-semibold">Get to work, with a lots less work</h1>
					<p className="w-fit md:w-1/2 text-xl md:text-2xl text-center mb-12">Dropbox delivers tools that help you move your work forward faster, keep it safe, and let you collaborate with ease.</p>
					<div className="flex flex-row justify-between space-x-4 mb-20">
						<Link href='/sign-up' className="flex items-center">
							<button className="font-bold text-lg bg-[#fff7db] text-black px-14 py-6 rounded-2xl hover:bg-gray-400 cursor-pointer">Sign up free<ArrowForwardOutlinedIcon className="ml-5"/></button>
						</Link>
					</div>
				</div>
				
			</div>
			{/*main stuff type shit*/}
			<div className="flex flex-row overflow-hidden min-h-screen w-full h-[130vh] bg-[#fff9EB] px-24 py-24">
				<div className="flex justify-center items-center w-full gap-16">
					<div className="flex w-4/12 flex-col gap-4">
						<h1 className="text-5xl font-bold text-[#0F172A]"> Everything you want, created in minutes.</h1>
						<p className="text-2xl font-semibold text-[#0F172A]">Your favorite local restaurants</p>
						<p className="text-[#0F172A] font-medium">Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try</p>
					</div>
					<div className="w-auto h-auto">
						<Image 
							src={picnic}
							className="justify-center"
						/>
					</div>
				</div>
			</div>

			{/*Filler steps*/}
			<div className="flex flex-col overflow-hidden px-4 sm:px-8 md:px-16 lg:px-64 h-[195vh] w-full bg-[#02254D]">
				<h1 className="text-[#fff7db] text-3xl sm:text-4xl md:text-5xl font-bold text-wrap w-fit xl:w-1/2 mt-20">High quality AI generated advertisements for your business</h1>
				<p1 className="w-1/2">Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p1>
				<div className="flex justify-end w-full">
					<div className="bg-gray-200 border-2 rounded-3xl w-5/12 h-fit py-10 px-10">
						<h1 className="text-4xl text-[#0F172A] font-bold pb-8">Video Creation <VideocamOutlinedIcon className="text-6xl"/></h1>
						<p className="pb-8 text-[#0F172A] leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean et tortor at risus viverra adipiscing at in.</p>
						<div className="pb-8">
							<Image 
								src={quandale}
								width={1280}
								height={720}
								className="rounded-3xl justify-center"
							/>
						</div>
						<Link href='about'>
							<button className="font-bold text-lg bg-[#fff7db] text-[#02254D] px-4 py-2 rounded-full hover:bg-gray-400 cursor-pointer">Learn more <ArrowForwardOutlinedIcon className="ml-1"/></button>
						</Link>
					</div>
				</div>
				<div className="flex justify-start w-full relative -mt-96">
					<div className="bg-gray-200 border-2 rounded-3xl w-5/12 h-fit py-10 px-10">
						<h1 className="text-4xl text-[#0F172A] font-bold pb-8">Audio Creation <VolumeUpOutlinedIcon className="text-5xl"/></h1>
						<p className="pb-8 text-[#0F172A] leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean et tortor at risus viverra adipiscing at in.</p>
						<div className="pb-8">
							<Image 
								src={quandale}
								width={1280}
								height={720}
								className="rounded-3xl justify-center"
							/>
						</div>
						<Link href='about'>
							<button className="font-bold text-lg bg-[#fff7db] text-[#02254D] px-4 py-2 rounded-full hover:bg-gray-400 cursor-pointer">Learn more <ArrowForwardOutlinedIcon className="ml-1"/></button>
						</Link>
					</div>
				</div>
				<div className="flex justify-end w-full relative -mt-36">
					<div className="bg-gray-200 border-2 rounded-3xl w-5/12 h-fit py-10 px-10">
						<h1 className="text-4xl text-[#0F172A] font-bold pb-8">Voice Creation <GraphicEqOutlinedIcon classname="text-7xl"/></h1>
						<p className="pb-8 text-[#0F172A] leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean et tortor at risus viverra adipiscing at in.</p>
						<div className="pb-8">
							<Image 
								src={quandale}
								width={1280}
								height={720}
								className="rounded-3xl justify-center"
							/>
						</div>
						<Link href='about'>
							<button className="font-bold text-lg bg-[#fff7db] text-[#02254D] px-4 py-2 rounded-full hover:bg-gray-400 cursor-pointer">Learn more <ArrowForwardOutlinedIcon className="ml-1"/></button>
						</Link>
					</div>
				</div>
			</div>
			<div className="flex flex-col overflow-hidden items-center min-h-screen w-full bg-[#fff9EB]">
				<h1 className="mt-20 text-5xl sm:text-6xl text-center font-semibold text-[#010102] w-fit md:w-1/2">Professional advertisements without the hassle</h1>
			</div>
		</div>
	);
}
