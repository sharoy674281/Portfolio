import React from "react";
import { MdOpenInNew } from "react-icons/md";

const MyProjects = () => {
	const projects = [
		{
			id: "1",
			title: "Calculator",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem recusandae beatae atque culpa aut consequatur rem laboriosam, dolorum reprehenderit itaque quidem, consectetur nobis laudantium necessitatibus deleniti, facere dicta voluptate ex.",
			skills: ["HTML", "CSS", "JS", "PHP", "MySQL", "Python"],
			demoLink: "./projects/calculator/index.html",
			sourceLink: "#",
		},
	];
	return (
		<div id="my-projects" className="flex flex-col items-center pt-5 pb-14">
			<h1 className="text-white text-4xl">
				My <span className="text-lightBlue">Projects</span>
			</h1>
			<div className="mt-8">
				{projects.map((project) => (
					<div
						key={project.id}
						className="flex w-[800px] h-[250px] bg-shade rounded-md mb-8">
						<div className=" flex flex-col text-white pt-5 pl-5">
							<h1 className="text-2xl">{project.title}</h1>
							<p className="text-sm mt-2">{project.description}</p>
							<div className="flex gap-2 projects-skills mt-3">
								{project.skills.map((skill, index) => (
									<div key={index}>{skill}</div>
								))}
							</div>
							<div className="flex mt-4">
								<a
									href={project.demoLink}
									className="button1 flex justify-center items-center"
									target="_blank"
									rel="noopener noreferrer">
									Live Demo
									<MdOpenInNew />
								</a>
								<a
									href={project.sourceLink}
									className="button2"
									target="_blank"
									rel="noopener noreferrer">
									View Source
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
