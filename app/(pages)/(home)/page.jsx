import Link from 'next/link'; 
import Image from 'next/image'; 
import Logo from './Logo.jpg'; 


export default function Home() {
	return (
		<div>
			<div className="flex flex-col overflow-hidden justify-center h-[105vh] bg-[#02254D]">
				<div className="w-full h-[54%] border-2 border-white flex flex-col items-center justify-center">
					<h1 className="text-center mb-6 text-5xl md:text-6xl font-semibold">Get to work, with a lots less work</h1>
					<p className="w-fit md:w-1/2 text-xl md:text-2xl text-center mb-12">Dropbox delivers tools that help you move your work forward faster, keep it safe, and let you collaborate with ease.</p>
					<div className="flex flex-row justify-between space-x-4">
						<Link href='/sign-up' className="flex items-center">
							<button className="font-bold text-lg bg-[#fff7db] text-black px-6 py-4 rounded-xl hover:bg-gray-400 cursor-pointer">Sign up free</button>
						</Link>
						<Link href='/pricing' className="flex items-center">
							<span className="font-bold text-lg text-black hover:bg-gray-400 cursor-pointer">Choose your plan</span>
						</Link>
					</div>
				</div>
				<div className="w-full grow bottom-0 border-2 border-green-500">

				</div>
			</div>

			<div className="flex flex-wrap justify-center min-h-screen bg-[#fff7db]">
				<h1>div 2</h1>
			</div>
		</div>
	);
}
