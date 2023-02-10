import Image from 'next/image';
import React, { useContext } from 'react';
import contact from '../public/assets/contact.png';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import { BsArrowUpCircle } from 'react-icons/bs';
import Link from 'next/link';
import LanguageContext from '@/context/language';
import Cardicon from './Cards/Card-Icon';

const Contact = () => {
	const ctx = useContext(LanguageContext);

	return (
		<div id="contact" className=" w-full pt-24">
			<div className="  max-w-7xl mx-auto px-2 py-16'">
				<p className=" uppercase text-xl tracking-widest color-primary">{!ctx.english ? 'Kontakt' : 'Contact'}</p>
				<h2 className=" py-5">{!ctx.english ? 'Skontaktuj się ze mną' : 'Contact with me'}</h2>
				<div className=" grid lg:grid-cols-5 gap-8">
					{/* left,top */}

					<div className=" p-4 col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-500 rounded-xl">
						<div className="lg:p-4 h-full">
							<div>
								<Image src={contact} height={120} alt="/contactIcon" />
							</div>
							<div>
								<h2 className="pt-4 pb-1">Krystian</h2>
								<p className=" pb-4 ">Frontend Developer</p>
							</div>
							<div className=" pt-3">
								<p>{!ctx.english ? 'Skontaktuj się ze mną lub sprawdź korzystając z poniższych linków' : 'Contact me or check using the links below'}</p>
								<div className=" flex items-center justify-center lg:justify-between py-4">
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
							</div>
						</div>
					</div>

					{/* right, bottom */}

					<div id="contactForm" className=" col-span-3 w-full h-auto shadow-xl shadow-gray-500 rounded-xl lg:p-4">
						<div className=" p-4">
							<form action="">
								<div className=" flex flex-col">
									<label className=" uppercase py-2 text-sm">{!ctx.english ? 'Imię' : 'Name'}</label>
									<input type="text" className=" flex border-2 border-gray-300 rounded-lg p-3" />
								</div>
								<div className=" flex flex-col py-2">
									<label className=" uppercase py-2 text-sm">Email</label>
									<input type="email" className=" flex border-2 border-gray-300 rounded-lg p-3" />
								</div>
								<div className=" flex flex-col py-2">
									<label className=" uppercase py-2 text-sm">{!ctx.english ? 'Temat' : 'Topic'}</label>
									<input type="text" className=" flex border-2 border-gray-300 rounded-lg p-3" />
								</div>
								<div className=" flex flex-col py-2">
									<label className=" uppercase py-2 text-sm">{!ctx.english ? 'Wiadomość' : 'Message'}</label>
									<textarea cols="30" rows="10" className=" border-2 border-gray-300 rounded-lg p-3" />
								</div>
								<div>
									<button className=" w-full p-4 mt-4 text-gray-200">{!ctx.english ? 'Wyślij wiadomość' : 'Send message'}</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className=" flex justify-end py-12 mr-10">
					<Link href="/">
						<div className="  cursor-pointer">
							<BsArrowUpCircle size={40} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
