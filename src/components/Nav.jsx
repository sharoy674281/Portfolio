import React from "react";

const Nav = () => {
	return (
		<div id="home" className="flex justify-between h-16 items-center">
			<a
				href="#home"
				className="ml-14 font-bold text-lg text-white navComponents ">
				Rakhman.
			</a>
			<div className="flex gap-5 mr-14">
				<a href="#about" className="text-lightBlue navComponents">
					ABOUT ME
				</a>
				<a href="#my-projects" className="text-white navComponents">
					MY PROJECTS
				</a>
				<a href="#contact-me" className="text-white navComponents">
					CONTACT ME
				</a>
			</div>
		</div>
	);
};

export default Nav;
