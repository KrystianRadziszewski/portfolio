import Link from 'next/link';
import { useContext } from 'react';

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import LanguageContext from '../context/language';
import ButtonLanguage from './ButtonLanguage';
import Poland from '../public/assets/poland.svg';
import UK from '../public/assets/united-kingdom.svg';

import CVpl from '../public/assets/cvpol2.png';
import CVen from '../public/assets/cveng2.png';
import Image from 'next/image';
import Cardicon, { Cardiconcv } from './Cards/Card-Icon';

const Main = () => {
	const ctx = useContext(LanguageContext);
	return (
		<div id="main" className=" w-full h-screen text-center pt-24 ">
			<div className=" max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div className=" flex justify-center absolute top-[10%] l-[50%] h-auto w-full text-4xl m-3 p-4">
					<ButtonLanguage>
						<p className=" text-sm ">{!ctx.english ? 'Switch on English' : 'Zmień na Polski'}</p>
						{ctx.english && <Image src={Poland} height={20} className=" ml-4" alt="flagicon" />}
						{!ctx.english && <Image src={UK} height={20} className="ml-4" alt="flagicon" />}
					</ButtonLanguage>
				</div>

				<div className=" mt-32">
					<p className=" uppercase text-sm tracking-widest text-gray-700">
						{!ctx.english && 'Kilka słów o mnie'}
						{ctx.english && 'Some about me'}
					</p>
					<h1>
						{!ctx.english ? 'Cześć, jestem' : 'Hi, I am'} <span className=" color-primary">Krystian</span>
					</h1>
					<h2 className=" py-2 text-gray-500 max-w-[70%] m-auto">Frontend Web Developer</h2>
					<p className=" py-6 text-gray-700 max-w-[70%] m-auto tracking-wide">
						{!ctx.english
							? `Koncetruje się na tworzeniu responsywnych aplikacji oraz stron internetowych typu front-end.
						 Podczas budowy korzystam z aktulanej dokumentacji dostępnej na oficjalnych stronach wybranych freamworków oraz z wykorzystaniem technik pod względem optymalizacji stron w
						przeglądarkach.`
							: `I focuses on creating responsive applications and front-end websites.
							 During construction, I use the current documentation available on the official websites of selected frameworks and using techniques in terms of page optimization in
							browsers.`}
					</p>
					<div className=" flex justify-between items-center max-w-xs m-auto py-4">
						<Link href="https://www.linkedin.com/in/krystian-radziszewski/">
							<Cardicon>
								<AiFillLinkedin />
							</Cardicon>
						</Link>
						<Link href="https://github.com/KrystianRadziszewski">
							<Cardicon>
								<AiFillGithub />
							</Cardicon>
						</Link>
						<Link href="/#contactForm">
							<Cardicon>
								<MdOutlineLocalPostOffice />
							</Cardicon>
						</Link>
					</div>
					<div className=" flex justify-center items-center max-w-xs m-auto py-4 ">
						<Cardiconcv>
							<a href="Krystian-Radziszewski_CVPL.pdf" download>
								<Image src={CVpl} width={70} className="mx-5" alt="cvicon" />
							</a>
						</Cardiconcv>
						<Cardiconcv>
							<a href="Krystian-Radziszewski_CVANG.pdf" download>
								<Image src={CVen} width={70} className="mx-5" alt="cvicon" />
							</a>
						</Cardiconcv>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
