import Link from 'next/link';

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { MdOutlineLocalPostOffice, MdDarkMode, MdLanguage } from 'react-icons/md';

const Main = () => {
	return (
		<div id="main" className=" w-full h-screen text-center pt-24 ">
			<div className=" max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div className=" flex justify-center absolute top-[10%] l-[50%] h-auto w-full text-4xl m-3 p-3">
					<div className="">
						<MdLanguage className=" mx-3" />
					</div>
				</div>
				<div>
					<p className=" uppercase text-sm tracking-widest text-gray-700">Kilka słów o mnie</p>
					<h1>
						Cześć, jestem <span className=" color-primary">Krystian</span>
					</h1>
					<h2 className=" py-2 text-gray-500 max-w-[70%] m-auto">Frontend Web Developer</h2>
					<p className=" py-6 text-gray-700 max-w-[70%] m-auto tracking-wide">
						Koncetruje się na tworzeniu responsywnych aplikacji oraz stron internetowych typu front-end.
						<br /> Podczas budowy korzystam z aktulanej dokumentacji dostępnej na oficjalnych stronach wybranych freamworków oraz z wykorzystaniem technik pod względem pozycjonowania stron w
						przeglądarkach
					</p>
					<div className=" flex justify-between items-center max-w-xs m-auto py-4">
						<div className=" rounded-full shadow-lg shadow-gray-700 p-3 mx-5 cursor-pointer hover:scale-150 ease-in duration-500 text-xl">
							<AiFillLinkedin />
						</div>
						<div className=" rounded-full shadow-lg shadow-gray-700 p-3 mx-5 cursor-pointer hover:scale-150 ease-in duration-500 text-xl">
							<AiFillGithub />
						</div>
						<Link href="/#contactForm">
							<div className=" rounded-full shadow-lg shadow-gray-700 p-3 mx-5 cursor-pointer hover:scale-150 ease-in duration-500 text-xl">
								<MdOutlineLocalPostOffice />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
