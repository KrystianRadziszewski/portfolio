import LanguageContext from '@/context/language';
import Image from 'next/image';
import myAvatar from '../public/assets/myAvatar.png';
import React, { useContext } from 'react';

const About = () => {
	const ctx = useContext(LanguageContext);
	return (
		<div id="about" className="  w-full md:h-screen p-2 flex items-center pb-16 pt-24">
			<div className=" max-w-7xl m-auto md:grid grid-cols-3 gap-8">
				<div className=" col-span-2">
					<p className=" uppercase text-xl tracking-widest color-primary"></p>
					<h2 className=" py-5">{!ctx.english ? 'Kim jestem' : 'Who i am'}</h2>
					<p className=" py-3 text-gray-500">{!ctx.english ? 'Freelancer' : 'Freelancer'}</p>
					<p className=" tracking-wide">
						{!ctx.english
							? 'Jestem osobą która obecnie tworzy aplikacje typu demo zdobywając doświadczenie oraz jako freelancer realizuję zlecenia. Ciągle poszerzam swoją wiedzę i uczę się nowych technik tworzenia aplikacji oraz stron statycznych, dynamicznych, responsywnych i przyjaznych użytkownikowi. Korzystam z oficjalnych dokumentacji wybranych freamworków co pozwala sprawnie rozwiązywać bieżące problemy. Zamiłowanie do tworzenia mam od dziecka stąd też pomysł na budownaie w internecie. Uwielbiam nowe wyzwania, poznawanie nowych ludzi oraz pracę zespołową. Podróże są nie odłączną częścią moje życia.'
							: 'I am a person who currently creates demo applications gaining experience and as a freelancer I carry out orders. I am constantly expanding my knowledge and learning new techniques for creating applications and static, dynamic, responsive and user-friendly websites. I use the official documentation of selected frameworks, which allows me to efficiently solve current problems. I have had a passion for creating since I was a child, hence the idea to build on the Internet. I love new challenges, meeting new people and teamwork. Traveling is an inseparable part of my life.'}
					</p>
				</div>
				<div>
					<div className=" shadow-lg shadow-gray-700 relative mx-auto my-20 bg-gradient-to-b from-purple-400 to-purple-700 rounded-full h-96 w-96 overflow-hidden md:h-96 md:w-96">
						<Image src={myAvatar} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
