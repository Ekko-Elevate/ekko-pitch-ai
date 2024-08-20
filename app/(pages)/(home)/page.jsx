import Link from 'next/link'; 
import Image from 'next/image'; 
import Logo from './Logo.jpg'; 
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import bodyGIF from './body-armor.gif';
import beachGIF from './celsius-beach.gif';
import poolGIF from './celsius-pool.gif';
export default function Home() {
	return (
		<div>
			<div className="flex flex-col overflow-hidden justify-center h-[100vh] bg-[#02254D]"> MAKE MOBIEL RESPONSIVE
				<div className="w-full h-[60%] flex flex-col items-center justify-center">
					<h1 className="text-center mb-6 text-5xl md:text-6xl font-semibold">Get to work, with a lots less work</h1>
					<p className="w-fit md:w-1/2 text-xl md:text-2xl text-center mb-12">Dropbox delivers tools that help you move your work forward faster, keep it safe, and let you collaborate with ease.</p>
					<div className="flex flex-row justify-between space-x-4 mb-20">
						<Link href='/sign-up' className="flex items-center">
							<button className="font-bold text-lg bg-[#fff7db] text-black px-6 py-6 rounded-2xl hover:bg-gray-400 cursor-pointer">Sign up free    <ArrowForwardOutlinedIcon className="ml-5"/></button>
						</Link>
						<Link href='/pricing' className="flex items-center">
							<span className="font-bold text-lg lg:underline lg:underline-offset-4 lg:decoration-1 text-black cursor-pointer inline">Choose your plan<ArrowForwardOutlinedIcon/></span>
						</Link>
					</div>
				</div>
				<div className="w-full h-[43%] flex justify-center items-center ">
					<div className="flex flex-row w-full h-full">
						<Image
							src={bodyGIF}
							alt="Body Armor GIF"
							className="object-cover w-1/3"
						/>
						<Image
							src={beachGIF}
							alt="Beach GIF"
							className="object-cover w-1/3"
						/>
						<Image
							src={poolGIF}
							alt="Pool GIF"
							className="object-cover w-1/3"
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col overflow-hidden px-4 sm:px-8 md:px-16 lg:px-36 h-[130vh] w-full bg-[#fff9EB]">
				<h1 className="text-[#0F172A] text-3xl sm:text-4xl md:text-5xl font-bold text-wrap w-fit xl:w-1/2 mt-20">High quality AI generated advertisements for your business</h1>
				<div className="flex justify-end w-full">
					<div className="border-2 rounded-3xl w-fit h-fit p-16">
						
					</div>
				</div>
			</div>
			<div className="flex flex-col overflow-hidden items-center min-h-screen w-full bg-[#02254D]">
				
			</div>
			<div className="flex flex-col overflow-hidden items-center min-h-screen w-full bg-[#fff9EB]">
				<h1 className="mt-20 text-5xl sm:text-6xl text-center font-semibold text-[#010102] w-fit md:w-1/2">Professional advertisements without the hassle</h1>
			</div>
		</div>
	);
}
