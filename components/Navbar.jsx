import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import navLogo from '../public/assets/mylogo.png';
import { AiOutlineClose, AiOutlineMenu, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import { Cardiconmobile } from './Cards/Card-Icon';
import LanguageContext from '@/context/language';

const Navbar = () => {
	const ctx = useContext(LanguageContext);
	const [navMobile, setNavMobile] = useState(false);
	const [shadow, setShadow] = useState(false);

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener('scroll', handleShadow);
	}, []);

	const handleNav = () => {
		return setNavMobile(!navMobile);
	};

	return (
		<div className={shadow ? 'bg-slate-50 fixed w-full h-20 shadow-xl z-[100] ' : 'bg-slate-50 fixed w-full h-20  z-[100]'}>
			<div className="  flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Link href="/">
					<Image src={navLogo} alt="navlogo" width={80} height={20} />
				</Link>
				<div>
					<ul className=" hidden md:flex uppercase">
						<Link href="/">
							<li className=" ml-10 text-sm  hover:border-b-2">Home</li>
						</Link>
						<Link href="/#about">
							<li className=" ml-10 text-sm  hover:border-b-2">{!ctx.english ? 'O mnie' : 'About me'}</li>
						</Link>
						<Link href="/#skills">
							<li className=" ml-10 text-sm  hover:border-b-2">{!ctx.english ? 'Umiejętności' : 'Skills'}</li>
						</Link>
						<Link href="/#projects">
							<li className=" ml-10 text-sm  hover:border-b-2">{!ctx.english ? 'Projekty' : 'Projects'}</li>
						</Link>
						<Link href="/#contact">
							<li className=" ml-10 text-sm  hover:border-b-2">{!ctx.english ? 'Kontakt' : 'Contact'}</li>
						</Link>
					</ul>
					{/* hamburger icon */}
					<div onClick={handleNav} className=" md:hidden">
						<AiOutlineMenu size={30} />
					</div>
				</div>
			</div>

			{/* MOBILE NAV */}

			<div onClick={handleNav} className={navMobile ? 'md:hidden fixed left-0 top-0 w-full h-full bg-black/70' : ''}>
				<div className={navMobile ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500' : ' fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
					<div>
						<div className=" flex justify-between w-full items-center">
							<Link href="/">
								<Image src={navLogo} width={87} height={35} alt="navlogo" />
							</Link>
							<div onClick={handleNav} className=" rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer">
								<AiOutlineClose />
							</div>
						</div>
						<div className=" border-b border-gray-700 my-4">
							<p>{!ctx.english ? 'Tworzenie to przyjemność' : 'Creating is a pleasure'}</p>
						</div>
					</div>
					<div className="py-3 flex flex-col">
						<ul className=" uppercase">
							<Link href="/">
								<li className=" py-4 text-sm  hover:border-b-2">Home</li>
							</Link>
							<Link href="/#about">
								<li className=" py-4 text-sm  hover:border-b-2">{!ctx.english ? 'O mnie' : 'About me'}</li>
							</Link>
							<Link href="/#skills">
								<li className=" py-4 text-sm  hover:border-b-2">{!ctx.english ? 'Umiejętności' : 'Skills'}</li>
							</Link>
							<Link href="/#projects">
								<li className=" py-4 text-sm  hover:border-b-2">{!ctx.english ? 'Projekty' : 'Projects'}</li>
							</Link>
							<Link href="/#contact">
								<li className=" py-4 text-sm  hover:border-b-2">{!ctx.english ? 'Kontakt' : 'Contact'}</li>
							</Link>
						</ul>
						<div className=" pt-20">
							<p className=" uppercase tracking-widest text-blue-400">{!ctx.english ? 'Nawiąż kontakt' : 'Conected with me'}</p>
						</div>
						<div className=" flex items-center justify-start my-4 w-full sm:w-[80%]">
							<Link href="https://www.linkedin.com/in/krystian-radziszewski/">
								<Cardiconmobile>
									<AiFillLinkedin />
								</Cardiconmobile>
							</Link>
							<Link href="https://github.com/KrystianRadziszewski">
								<Cardiconmobile>
									<AiFillGithub />
								</Cardiconmobile>
							</Link>
							<Link href="/#contactForm">
								<Cardiconmobile>
									<MdOutlineLocalPostOffice />
								</Cardiconmobile>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
