import Image from 'next/image';
import React from 'react';
import myAvatar from '../public/assets/myAvatar.png';

const About = () => {
	return (
		<div id="about" className="  w-full md:h-screen p-2 flex items-center pb-16 pt-24">
			<div className=" max-w-7xl m-auto md:grid grid-cols-3 gap-8">
				<div className=" col-span-2">
					<p className=" uppercase text-xl tracking-widest color-primary">O mnie</p>
					<h2 className=" py-5">Kim jestem</h2>
					<p className=" py-3 text-gray-500">Freelancer</p>
					<p className=" tracking-wide">
						Jestem osobą która obecnie tworzy różne aplikacje typu demo zdobywając doświadczenie oraz jako freelancer realizuję zlecenia. Ciągle poszerzam swoją wiedzę i uczę się nowych technik
						tworzenia aplikacji oraz stron statycznych, dynamicznych, responsywnych i przyjaznych użytkownikowi. Umiem korzystać z oficjalnych dokumentacji wybranych freamworków co pozwala mi sprawnie
						rozwiązywać bieżące problemy. Zamiłowanie do tworzenia mam od dziecka stąd też pomysł na budownaie w internecie. Uwielbiam nowe wyzwania, poznawanie nowych ludzi oraz wycieczki.
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
