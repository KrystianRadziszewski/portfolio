import Image from 'next/image';
import Link from 'next/link';
import React, {  useEffect, useState } from 'react';
import navLogo from '../public/assets/mylogo.png';
import { AiOutlineClose, AiOutlineMenu, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
// import { useRouter } from 'next/router';

const Navbar = () => {
	const [navMobile, setNavMobile] = useState(false);
	const [shadow, setShadow] = useState(false);

	// const [navBackground, setNavBackground] = useState('#f8fafc');
	// const [linkColor, setLinkColor] = useState('#1e293b');
	// const router = useRouter();

	// useEffect(() => {
	// 	if (router.isPath === '/project1' || router.isPath === '/project2') {
	// 		setNavBackground('transparent');
	// 		setLinkColor('#f8fafc');
	// 	} else {
	// 		setNavBackground('#f8fafc');
	// 		setLinkColor('#1e293b');
	// 	}
	// }, [router]);

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
							<li className=" ml-10 text-sm  hover:border-b-2">O mnie</li>
						</Link>
						<Link href="/#skills">
							<li className=" ml-10 text-sm  hover:border-b-2">Umiejętności</li>
						</Link>
						<Link href="/#projects">
							<li className=" ml-10 text-sm  hover:border-b-2">Projekty</li>
						</Link>
						<Link href="/#contact">
							<li className=" ml-10 text-sm  hover:border-b-2">Kontakt</li>
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
							<p>Tworzenie to przyjemność</p>
						</div>
					</div>
					<div className="py-3 flex flex-col">
						<ul className=" uppercase">
							<Link href="/">
								<li className=" py-4 text-sm  hover:border-b-2">Home</li>
							</Link>
							<Link href="/#about">
								<li className=" py-4 text-sm  hover:border-b-2">O mnie</li>
							</Link>
							<Link href="/#skills">
								<li className=" py-4 text-sm  hover:border-b-2">Umiejętności</li>
							</Link>
							<Link href="/#projects">
								<li className=" py-4 text-sm  hover:border-b-2">Projekty</li>
							</Link>
							<Link href="/#contact">
								<li className=" py-4 text-sm  hover:border-b-2">Kontakt</li>
							</Link>
						</ul>
						<div className=" pt-20">
							<p className=" uppercase tracking-widest text-blue-400">Nawiąż kontakt</p>
						</div>
						<div className=" flex items-center justify-start my-4 w-full sm:w-[80%]">
							<div className=" rounded-full shadow-lg shadow-gray-700 p-3 mx-5 cursor-pointer hover:scale-105 ease-in duration-500">
								<AiFillLinkedin />
							</div>
							<div className=" rounded-full shadow-lg shadow-gray-700 p-3 mx-5 cursor-pointer hover:scale-105 ease-in duration-500">
								<AiFillGithub />
							</div>
							<div className=" rounded-full shadow-lg shadow-gray-700 p-3 mx-5 cursor-pointer hover:scale-105 ease-in duration-500">
								<MdOutlineLocalPostOffice />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
