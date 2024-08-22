import Link from 'next/link'; 

export default function Pricing() {
	return (
		<div className="w-full h-screen bg-[#fff7db] font-serif">
            <h1 className="text-blue-900 w-full h-5 text-center pt-5 text-6xl font-bold">
                Subscription Plans
            </h1>
            <div className="flex flex-row h-full justify-center items-center gap-10">
                <div className="flex flex-col relative h-2/3 w-1/4 rounded-lg bg-white group">
                    <div className="bg-[#686d70] group-hover:bg-[#02254D] w-full h-1/6 rounded-t-lg transition-colors duration-300">
                        <h1 className="text-white text-center text-2xl pt-4 font-bold">
                            Standard
                        </h1>
                        <div className="flex justify-between items-end h-1/2 px-2">
                            <span className="text-left">
                                $0/Month
                            </span>
                            <span className="text-right">
                                200 Credits/Month
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center bg-[#686d70] group-hover:bg-[#02254D] w-full h-1/6 rounded-b-lg absolute bottom-0 transition-colors duration-300">
                        <Link href="/signup">
                            <div className="text-lg rounded-full bg-white text-black px-4">
                                Subcribe
                            </div>
                        </Link>
                    </div>
                    <ul className="text-black h-2/3 px-10 py-4 list-disc text-wrap">
                        <li>
                            Ekko
                        </li>
                        <li>
                            Omar
                        </li>
                        <li>
                            Aaron
                        </li>
                        <li>
                            Blawg
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col relative h-2/3 w-1/4 rounded-lg bg-white group">
                    <div className="bg-[#686d70] group-hover:bg-[#02254D] w-full h-1/6 rounded-t-lg transition-colors duration-300">
                        <h1 className="text-white text-center text-2xl pt-4 font-bold">
                            Premium
                        </h1>
                        <div className="flex justify-between items-end h-1/2 px-2">
                            <span className="text-left">
                                $10/Month
                            </span>
                            <span className="text-right">
                                500 Credits/Month
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center bg-[#686d70] group-hover:bg-[#02254D] w-full h-1/6 rounded-b-lg absolute bottom-0 transition-colors duration-300">
                        <Link href="/signup">
                            <div className="text-lg rounded-full bg-white text-black px-4">
                                Subcribe
                            </div>
                        </Link>
                    </div>
                    <ul className="text-black h-2/3 px-10 py-4 list-disc text-wrap">
                        <li>
                            Ekko
                        </li>
                        <li>
                            Omar
                        </li>
                        <li>
                            Aaron
                        </li>
                        <li>
                            Blawg
                        </li>
                    </ul>
                </div>
            </div>
        </div>
	);
}