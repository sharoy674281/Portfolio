import React from "react";
import { MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const MyProjects = () => {
	const projects = [
		{
			id: "1",
			title: "Calculator",
			description:
				"Calculator i made by using HTML, CSS and vanilla Javascript.",
			skills: ["HTML", "CSS", "Javscript"],
			demoLink:
				"https://github.com/sharoyirs/New-calculator-with-better-js-code",
			sourceLink: "#",
		},
		{
			id: "2",
			title: "Pokedex",
			description: "Pokedex made by using PokeAPI",
			skills: ["HTML", "CSS", "Javascript", "JSON"],
			demoLink: "https://github.com/sharoyirs/Pokedex-with-PokeAPI",
			sourceLink: "#",
		},
		{
			id: "3",
			title: "Portfolio",
			description:
				"My first portfolio, and first time hosting a website online.",
			skills: ["HTML", "CSS", "React", "Tailwind"],
			demoLink: "https://github.com/sharoyirs/Portfolio",
			sourceLink: "https://rakhmanportfolio.netlify.app/",
		},
	];
	return (
		<div id="my-projects" className="flex flex-col items-center pt-5 pb-14">
			<h1 className="text-2xl text-white lg:text-4xl">
				My <span className="text-lightBlue">Projects</span>
			</h1>
			<div className="mt-8">
				{projects.map((project) => (
					<div
						key={project.id}
						className="w-[250px] flex lg:w-[800px] bg-shade rounded-md max-lg:pt-4 pb-4 mb-5">
						<div className=" max-lg:w-full flex flex-col text-white lg:pt-5 lg:pl-5 max-lg:items-center">
							<h1 className="lg:text-2xl max-lg:font-bold">
								{project.title}
							</h1>
							<p className="text-xs lg:text-sm mt-2 max-lg:pl-2">
								{project.description}
							</p>
							<div className="flex gap-1 lg:gap-2 projects-skills mt-3 max-lg:pr-2 max-lg:pl-2">
								{project.skills.map((skill, index) => (
									<div key={index}>{skill}</div>
								))}
							</div>
							<div className="flex mt-4 gap-2">
								<a
									href={project.demoLink}
									className="button1 flex justify-center items-center gap-1 max-lg:text-xs max-lg:h-7"
									target="_blank"
									rel="noopener noreferrer">
									Live Demo
									<MdOpenInNew />
								</a>
								<a
									href={project.sourceLink}
									className="button2 gap-1 flex justify-center items-center max-lg:text-xs max-lg:h-7"
									target="_blank"
									rel="noopener noreferrer">
									View Source
									<FaGithub />
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyProjects;
