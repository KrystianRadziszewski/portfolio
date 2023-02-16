import React, { useContext } from 'react';
import ProjectItem from './ProjectItem';
import img1 from '../public/assets/projects/myportfolio-web.png';
import img2 from '../public/assets/projects/biblioteka.png';
import LanguageContext from '@/context/language';

const Projects = () => {
	const ctx = useContext(LanguageContext);
	return (
		<div id="projects" className=" w-full pt-24">
			<div className="  max-w-7xl mx-auto px-2 py-16'">
				<p className=" uppercase text-xl tracking-widest color-primary">{!ctx.english ? 'Projekty' : 'Projects'}</p>
				<h2 className=" py-5">{!ctx.english ? 'Co stworzyłem' : 'What I created'}</h2>
				<div className=" px-8 md:flex flex-row">
					<ProjectItem title="Portfolio" backgroundImg={img1} projectUrl="/project1" />
					<ProjectItem title="Realizacja zamówień" backgroundImg={img2} projectUrl="/project2" />
				</div>
			</div>
		</div>
	);
};

export default Projects;
