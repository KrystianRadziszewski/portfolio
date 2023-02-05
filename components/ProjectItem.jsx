import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const ProjectItem = ({ backgroundImg, title, projectUrl }) => {
	return (
		<div className=" group m-5 md:basis-1/2 relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl hover:bg-gradient-to-r from-purple-400 to-purple-700">
			<Image src={backgroundImg} alt="/" className="rounded-xl group-hover:opacity-10" />
			<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
				<h3 className=" text-2xl text-white tracking-wider">{title}</h3>
				<p className="text-white pb-4 pt-2">JS</p>
				<Link href={projectUrl}>
					<p className=" py-2 px-4 rounded-lg bg-white text-gray-700 underline text-center">Zobacz</p>
				</Link>
			</div>
		</div>
	);
};

export default ProjectItem;
