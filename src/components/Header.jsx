import { FaGithub } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";

const Header = () => {
	const [main] = useTypewriter({
		words: ["Hi, I'm Rakhman Ismailov"],
		typeSpeed: 80,
		deleteSpeed: 50,
	});
	const [mobile] = useTypewriter({
		words: ["Rakhman Ismailov"],
		typeSpeed: 80,
		deleteSpeed: 50,
	});
	return (
		<div className="header lg:flex items-center lg:justify-between lg:h-96">
			<div className="ml-4 lg:w-[600px] lg:ml-14 flex flex-col max-lg:items-center">
				<h1 className="text-5xl font-medium max-lg:hidden">{main}</h1>
				<div className="flex lg:hidden">
					<img
						className="h-auto w-[200px] lg:w-[400px]"
						src="/images/Rakhman mobile.png"
						alt=""
					/>
				</div>
				<h1 className="text-4xl lg:hidden">{mobile}</h1>
				<h2 className="text-2xl mb-3 lg:text-3xl text-lightBlue lg:font-medium lg:mb-5">
					Frontend developer
				</h2>
				<p className="text-xs lg:text-base max-lg:w-[300px]">
					I'm a Computer engineering student and a web developer based in
					Bergen, Norway. I design and build user interfaces
				</p>
				<div className=" flex mt-4 gap-3 lg:gap-3 max-lg:mt-6 max-lg:mb-10">
					<a
						href="https://github.com/sharoyirs"
						target="blank"
						className="button1 gap-1">
						GitHub <FaGithub />
					</a>
					<a href="#contact-me" className="button2 max-lg:h-9">
						Let's Talk
					</a>
				</div>
			</div>
			<div className="flex self-end max-lg:hidden">
				<img
					className="h-auto w-[200px] lg:w-[400px]"
					src="/images/Rakhman cropped.png"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Header;
