import React from "react";

const ContactMe = () => {
	return (
		<div
			id="contact-me"
			className="flex flex-col items-center bg-shade pt-5 pb-14">
			<h1 className="text-white text-4xl">
				Contact <span className="text-lightBlue">Me</span>
			</h1>
			<form
				action=""
				method="get"
				className="mt-8 flex flex-col items-center text-white">
				<div className="grid grid-cols-2 gap-2 contact-inputs">
					<input required type="text" placeholder="Full Name" />
					<input required type="email" placeholder="Email Address" />
					<input required type="number" placeholder="Mobile Number" />
					<input required type="text" placeholder="Email Subject" />
				</div>
				<textarea
					required
					name=""
					id=""
					className="resize-none w-full rounded-md border-[3px] border-lightBlue mt-2 h-64 pl-2 pt-2 mb-2 bg-shade"></textarea>
				<button type="submit" className="button1">
					Submit
				</button>
			</form>
		</div>
	);
};

export default ContactMe;
