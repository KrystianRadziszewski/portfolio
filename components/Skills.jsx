import Image from 'next/image';
import React from 'react';
import html from '../public/assets/skills/html.png';
import css from '../public/assets/skills/css.png';
import javascript from '../public/assets/skills/javascript.png';
import react from '../public/assets/skills/react.png';
import nextjs from '../public/assets/skills/nextjs.png';
import tailwind from '../public/assets/skills/tailwind.png';
import mongo from '../public/assets/skills/mongo.png';
import github from '../public/assets/skills/github1.png';
import firebase from '../public/assets/skills/firebase.png';

const Skills = () => {
	return (
		<div id="skills" className="  w-full lg:h-screen p-2 pt-24">
			<div className=" max-w-7xl mx-auto flex flex-col justify-center h-full">
				<p className=" uppercase text-xl tracking-widest color-primary">Umiejętności</p>
				<h2 className=" py-5">Co potrafię</h2>
				<div className=" grid md:grid-cols-3 lg:grid-cols-4 gap-8">
					<div className=" p-6 shadow-xl rounded-xl hover:scale-95 ease-in duration-500">
						<div className=" grid grid-cols-2 gap-4 justify-center items-center">
							<div className=" m-auto">
								<Image src={html} width={70} alt="/" />
							</div>
							<div className=" flex flex-col items-center justify-center">
								<h3>HTML</h3>
							</div>
						</div>
					</div>
					<div className=" p-6 shadow-xl rounded-xl hover:scale-95 ease-in duration-500">
						<div className=" grid grid-cols-2 gap-4 justify-center items-center">
							<div className=" m-auto">
								<Image src={css} width={70} alt="/" />
							</div>
							<div className=" flex flex-col items-center justify-center">
								<h3>CSS</h3>
							</div>
						</div>
					</div>
					<div className=" p-6 shadow-xl rounded-xl hover:scale-95 ease-in duration-500">
						<div className=" grid grid-cols-2 gap-4 justify-center items-center">
							<div className=" m-auto">
								<Image src={javascript} width={70} alt="/" />
							</div>
							<div className=" flex flex-col items-center justify-center">
								<h3>JAVASCRIPT</h3>
							</div>
						</div>
					</div>
					<div className=" p-6 shadow-xl rounded-xl hover:scale-95 ease-in duration-500">
						<div className=" grid grid-cols-2 gap-4 justify-center items-center">
							<div className=" m-auto">
								<Image src={react} width={70} alt="/" />
							</div>
							<div className=" flex flex-col items-center justify-center">
								<h3>REACT</h3>
							</div>
						</div>
					</div>
					<div className=" p-6 shadow-xl rounded-xl hover:scale-95 ease-in duration-500">
						<div className=" grid grid-cols-2 gap-4 justify-center items-center">
							<div className=" m-auto">
								<Image src={nextjs} width={70} alt="/" />
							</div>
							<div className=" flex flex-col items-center justify-center">
								<h3>NEXT JS</h3>
							</div>
						</div>
					</div>
					<div className=" p-6 shadow-xl rounded-xl hover:scale-95 ease-in duration-500">
						<div className=" grid grid-cols-2 gap-4 justify-center items-center">
							<div className=" m-auto">
								<Image src={tailwind} width={70} alt="/" />
							</div>
							<div className=" flex flex-col items-center justify-center">
								<h3>TAILWIND</h3>
							</div>
						</div>
					</div>
					<div className=" p-6 shadow-xl rounded-xl hover:scale-95 ease-in duration-500">
						<div className=" grid grid-cols-2 gap-4 justify-center items-center">
							<div className=" m-auto">
								<Image src={mongo} width={70} alt="/" />
							</div>
							<div className=" flex flex-col items-center justify-center">
								<h3>MONGO DB</h3>
							</div>
						</div>
					</div>
					<div className=" p-6 shadow-xl rounded-xl hover:scale-95 ease-in duration-500">
						<div className=" grid grid-cols-2 gap-4 justify-center items-center">
							<div className=" m-auto">
								<Image src={firebase} width={70} alt="/" />
							</div>
							<div className=" flex flex-col items-center justify-center">
								<h3>FIREBASE</h3>
							</div>
						</div>
					</div>
					<div className=" p-6 shadow-xl rounded-xl hover:scale-95 ease-in duration-500">
						<div className=" grid grid-cols-2 gap-4 justify-center items-center">
							<div className=" m-auto">
								<Image src={github} width={70} alt="/" />
							</div>
							<div className=" flex flex-col items-center justify-center">
								<h3>GITHUB</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
