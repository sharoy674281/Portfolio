import React from "react";

const About = () => {
	return (
		<div
			id="about"
			className="flex justify-center flex-col items-center bg-shade pt-5 pb-14">
			<div className="">
				<h1 className="text-white text-4xl">
					About <span className="text-lightBlue">Me</span>
				</h1>
			</div>
			<div className="bg-mainColor h-[450px] w-[800px] mt-8 rounded-md flex flex-col ">
				<div className="bg-macGray rounded-t-md h-5 flex gap-2 items-center pl-3">
					<div className="circle bg-red-500"></div>
					<div className="circle bg-yellow-500"></div>
					<div className="circle bg-green-500"></div>
				</div>
				<div className="mt-3 ml-10 text-white">
					<div className="mac-lines">
						<span>1</span>
						<p>&gt; Rakhman.currentLocation</p>
					</div>
					<div className="mac-lines">
						<span>2</span>
						<p className="text-macYellow">"Bergen, Norway"</p>
					</div>
					<div className="mac-lines">
						<span>3</span>
						<p></p>
					</div>
					<div className="mac-lines">
						<span>4</span>
						<p>&gt; Rakhman.contactInfo</p>
					</div>
					<div className="mac-lines">
						<span>5</span>
						<p className="text-macYellow mac-links">
							["
							<a href="mailto:rakhmanirs@yahoo.no">
								Rakhmanirs@yahoo.no
							</a>
							","
							<a
								target="_blank"
								href="https://www.linkedin.com/in/rakhman-ismailov">
								LinkedIn
							</a>
							","
							<a target="_blank" href="https://github.com/sharoyirs">
								Github
							</a>
							"]
						</p>
					</div>
					<div className="mac-lines">
						<span>6</span>
						<p></p>
					</div>
					<div className="mac-lines">
						<span>7</span>
						<p>&gt; Rakhman.resume</p>
					</div>
					<div className="mac-lines mac-links text-macYellow">
						<span>8</span>
						<p>
							"
							<a
								target="blank"
								href="/pdf/Said-Rakhman_Ismailov - CV 2023.pdf">
								RakhmanCV.pdf
							</a>
							"
						</p>
					</div>
					<div className="mac-lines">
						<span>9</span>
						<p></p>
					</div>
					<div className="mac-lines">
						<span>10</span>
						<p>&gt; Rakhman.interests</p>
					</div>
					<div className="mac-lines text-macYellow">
						<span>11</span>
						<p>["Coding", "Weightlifting", "Brazilian Jiu Jitsu"]</p>
					</div>
					<div className="mac-lines">
						<span>12</span>
						<p></p>
					</div>
					<div className="mac-lines">
						<span>13</span>
						<p>&gt; Rakhman.education</p>
					</div>
					<div className="mac-lines">
						<span>14</span>
						<p className="text-macYellow">
							"Computer engineering, Western Norway University of Applied
							Sciences, Bergen"
						</p>
					</div>
					<div className="mac-lines">
						<span>15</span>
						<p></p>
					</div>
					<div className="mac-lines">
						<span>16</span>
						<p>&gt; Rakhman.skills</p>
					</div>
					<div className="mac-lines">
						<span>17</span>
						<p className="text-macYellow">
							["Sass", "JavaScript", "Python", "React", "Node",
							"Express", "git"]
						</p>
					</div>
					<div className="mac-lines">
						<span>18</span>
						<p></p>
					</div>
					<div className="mac-lines">
						<span>19</span>
						<p>&gt;</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
