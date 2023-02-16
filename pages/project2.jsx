import Image from 'next/legacy/image';
import React, { useContext } from 'react';
import img1 from '../public/assets/projects/biblioteka.png';
import { BsCheck } from 'react-icons/bs';
import Link from 'next/link';
import LanguageContext from '@/context/language';

const project1 = () => {
	const ctx = useContext(LanguageContext);
	return (
		<div className=" w-full ">
			<div className=" w-screen h-[40vh] lg:h-[40vh] relative">
				<div className=" absolute top-0 left-0 w-full h-[40vh] lg:h-[40vh] bg-black/40 z-10 " />
				<Image src={img1} alt="/" className=" absolute z-1" layout="fill" objectFit="cover" />
				<div className=" absolute max-w-7xl text-white z-10 top-[60%] left-[5%] p-2">
					<h2 className=" py-2">{!ctx.english ? 'Realizacja zleceń' : 'Orders'}</h2>
					<h3>Next JS </h3>
				</div>
			</div>

			<div className=" max-w-7xl p-2 ml-4 grid md:grid-cols-5 gap-8 pt-8">
				<div className=" col-span-3 lg:col-start-2 lg:col-span-3">
					<h2>{!ctx.english ? 'Opis' : 'Desription'}</h2>
					<p>
						{!ctx.english
							? `Będzie to strona statyczna która jest w trakcie budowy oparta o freamwork Next JS, stylizacja CSS oraz z biblioteką zdjęć z wykonanych realizacji. Będzie ona responsywna, zawierała dane kontaktowe i różne animacje. `
							: `It will be a static site which is under construction based on freamwork Next JS, CSS styling and with a library of images from completed projects. It will be responsive, include contact information and various animations.`}
					</p>

					{/* <button disabled className=" px-8 py-2 mt-4 mr-8">
						GITHUB
					</button> */}
					<div className="px-8 py-2 mt-4 mr-8 button-off text-center">GITHUB</div>
				</div>
				<div className=" col-span-4 md:col-span-1 shadow-xl shadow-gray-500 rounded-xl p-4">
					<div className="py-2 ">
						<p className=" text-center font-bold pb-2">{!ctx.english ? 'Technologie' : 'Technologies'}</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className=" flex items-center justify-center md:justify-start text-gray-600 py-2">
								<BsCheck />
								JavaScript
							</p>
							<p className=" flex items-center justify-center md:justify-start text-gray-600 py-2">
								<BsCheck />
								CSS
							</p>
							<p className=" flex items-center justify-center md:justify-start text-gray-600 py-2">
								<BsCheck />
								Next JS
							</p>
						</div>
					</div>
				</div>
				<Link href="/#projects" className=" col-start-1 md:col-start-2">
					<p className=" underline">{!ctx.english ? 'Wstecz' : 'Back'}</p>
				</Link>
			</div>
		</div>
	);
};

export default project1;
