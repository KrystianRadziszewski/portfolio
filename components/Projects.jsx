import React from 'react';
import ProjectItem from './ProjectItem';
import img1 from '../public/assets/projects/property.jpg';
import img2 from '../public/assets/projects/crypto.jpg';

const Projects = () => {
	return (
		<div id="projects" className=" w-full pt-24">
			<div className="  max-w-7xl mx-auto px-2 py-16'">
				<p className=" uppercase text-xl tracking-widest color-primary">Projekty</p>
				<h2 className=" py-5">Co stworzyłem</h2>
				<div className=" px-8 md:flex flex-row">
					<ProjectItem title="title" backgroundImg={img1} projectUrl="/project1" />
					<ProjectItem title="title" backgroundImg={img2} projectUrl="/project2" />
				</div>
			</div>
		</div>
	);
};

export default Projects;
