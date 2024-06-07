import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = (event) => {
		event.preventDefault();
		setIsOpen(!isOpen);
	};
	return (
		<div className="flex flex-col">
			<div id="home" className={`flex justify-between h-16 items-center`}>
				<a
					href=""
					className="ml-4 lg:ml-14 font-bold lg:text-lg text-white navComponents ">
					Rakhman.
				</a>
				<div className="lg:hidden">
					<a href="">
						<RxHamburgerMenu
							className=" mr-4 text-white size-6"
							onClick={toggleMenu}
						/>
					</a>
				</div>
				<ul className="flex gap-5 max-lg:hidden mr-14">
					<li>
						<a href="#about" className="text-lightBlue navComponents">
							ABOUT ME
						</a>
					</li>
					<li>
						<a href="#my-projects" className="text-white navComponents">
							MY PROJECTS
						</a>
					</li>
					<li>
						<a href="#contact-me" className="text-white navComponents">
							CONTACT ME
						</a>
					</li>
				</ul>
			</div>
			<ul
				className={`flex gap-5 flex-col hamburger-links mb-4 lg:hidden ${
					isOpen ? "max-lg:flex justify-center items-center" : "max-lg:hidden"
				}`}>
				<li>
					<a href="#about" className="text-lightBlue navComponents">
						ABOUT ME
					</a>
				</li>
				<li>
					<a href="#my-projects" className="text-white navComponents">
						MY PROJECTS
					</a>
				</li>
				<li>
					<a href="#contact-me" className="text-white navComponents">
						CONTACT ME
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
