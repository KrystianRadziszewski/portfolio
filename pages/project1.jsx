import Image from 'next/legacy/image';
import React from 'react';
import img1 from '../public/assets/projects/property.jpg';
import { BsCheck } from 'react-icons/bs';
import Link from 'next/link';

const project1 = () => {
	return (
		<div className=" w-full ">
			<div className=" w-screen h-[40vh] lg:h-[40vh] relative">
				<div className=" absolute top-0 left-0 w-full h-[40vh] lg:h-[40vh] bg-black/40 z-10 " />
				<Image src={img1} alt="/" className=" absolute z-1" layout="fill" objectFit="cover" />
				<div className=" absolute max-w-7xl text-white z-10 top-[60%] left-[5%] p-2">
					<h2 className=" py-2">Projekt 1</h2>
					<h3>Technologie / rózne / costam</h3>
				</div>
			</div>

			<div className=" max-w-7xl p-2 ml-4 grid md:grid-cols-5 gap-8 pt-8">
				<div className=" col-span-3 lg:col-start-2 lg:col-span-3">
					<p>Projekt</p>
					<h2>Podgląd</h2>
					<p>
						(OPIS PROJEKTU) Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut expedita aperiam quam temporibus quis repudiandae quod cumque quidem error? Provident repudiandae iure
						doloribus ea hic veritatis. Excepturi beatae nulla saepe!
					</p>
					<button className=" px-8 py-2 mt-4 mr-8">DEMO</button>
					<button className=" px-8 py-2 mt-4">KOD</button>
				</div>
				<div className=" col-span-4 md:col-span-1 shadow-xl shadow-gray-500 rounded-xl p-4">
					<div className="py-2 ">
						<p className=" text-center font-bold pb-2">Technologie</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className=" flex items-center justify-center md:justify-start text-gray-600 py-2">
								<BsCheck />
								JavaScript
							</p>
							<p className=" flex items-center justify-center md:justify-start text-gray-600 py-2">
								<BsCheck />
								Tailwind
							</p>
							<p className=" flex items-center justify-center md:justify-start text-gray-600 py-2">
								<BsCheck />
								React
							</p>
						</div>
					</div>
				</div>
				<Link href="/#projects" className=" col-start-1 md:col-start-2">
					<p className=" underline">Wstecz</p>
				</Link>
			</div>
		</div>
	);
};

export default project1;
