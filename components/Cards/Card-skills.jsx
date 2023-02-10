import Image from 'next/image';
import React from 'react';

const Cardskill = ({ src, title }) => {
	return (
		<div className=" p-6 shadow-xl rounded-xl hover:scale-95 ease-in duration-500">
			<div className=" grid grid-cols-2 gap-4 justify-center items-center">
				<div className=" m-auto">
					<Image src={src} width={70} alt={title} />
				</div>
				<div className=" flex flex-col items-center justify-center">
					<h3>{title}</h3>
				</div>
			</div>
		</div>
	);
};

export default Cardskill;
