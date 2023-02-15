import Image from 'next/image';
import React, { useContext } from 'react';
import html from '../public/assets/skills/html.png';
import css from '../public/assets/skills/css.png';
import javascript from '../public/assets/skills/javascript.png';
import react from '../public/assets/skills/react.png';
import nextjs from '../public/assets/skills/nextjs.png';
import tailwind from '../public/assets/skills/tailwind.png';
import mongo from '../public/assets/skills/mongo.png';
import github from '../public/assets/skills/github1.png';
import firebase from '../public/assets/skills/firebase.png';
import LanguageContext from '@/context/language';
import Cardskill from './Cards/Card-skills';

const Skills = () => {
	const ctx = useContext(LanguageContext);
	return (
		<div id="skills" className="  w-full lg:h-screen p-2 pt-24">
			<div className=" max-w-7xl mx-auto flex flex-col justify-center h-full">
				<p className=" uppercase text-xl tracking-widest color-primary">{!ctx.english ? 'Umiejętności' : 'Skills'}</p>
				<h2 className=" py-5">{!ctx.english ? 'Co potrafię' : 'What i can do'}</h2>
				<div className=" grid md:grid-cols-3 lg:grid-cols-4 gap-8">
					<Cardskill src={html} title="HTML" />
					<Cardskill src={css} title="CSS" />
					<Cardskill src={javascript} title="JAVASCRIPT" />
					<Cardskill src={react} title="REACT" />
					<Cardskill src={nextjs} title="NEXT JS" />
					<Cardskill src={tailwind} title="TAILWIND" />
					<Cardskill src={mongo} title="MONGO DB" />
					<Cardskill src={firebase} title="FIREBASE" />
					<Cardskill src={github} title="GITHUB" />
				</div>
			</div>
		</div>
	);
};

export default Skills;
