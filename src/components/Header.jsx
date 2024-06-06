import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";


const Header = () => {
	const [text] = useTypewriter({
		words: ["Hi, I'm Rakhman Ismailov"],
		typeSpeed: 80,
		deleteSpeed: 50,
	});
	return (
		<div className=" header flex items-center justify-between h-96">
			<div className=" w-[600px] ml-14">
				<h1 className="text-5xl font-medium">{text}</h1>
				<h2 className="text-3xl text-lightBlue font-medium mb-5">
					Frontend developer
				</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
					fugit corporis rerum deserunt vel iste totam nulla error quod
					natus.
				</p>
				<div className=" flex mt-4">
					<a href="#" className="button1">
						Hire Me
					</a>
					<a href="#" className="button2">
						Let's Talk
					</a>
				</div>
				{/* <div className="flex mt-8 gap-2">
					<a href="#">
						<FaLinkedin className="text-lightBlue size-10 hover:text-blue-600" />
					</a>
					<a href="#">
						<FaGithub className="text-lightBlue size-10 hover:text-blue-600" />
					</a>
				</div> */}
			</div>
			<div className="flex self-end">
				<img
					className="h-auto w-[400px]"
					src="/images/Rakhman cropped.png"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Header;
