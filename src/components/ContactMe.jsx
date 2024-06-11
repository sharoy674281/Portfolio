import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
	const form = useRef();
	const [messageVisible, setMessageVisible] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm("service_iud0x8o", "template_cw39sah", form.current, {
				publicKey: "CECFgAHaLJcOqq3jj",
			})
			.then(
				() => {
					console.log("SUCCESS!");
					setMessageVisible(true);
					setTimeout(() => {
						setMessageVisible(false);
					}, 3000);
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};

	return (
		<div
			id="contact-me"
			className="flex flex-col items-center bg-shade pt-5 pb-14">
			<h1 className="text-white text-4xl max-lg:text-3xl">
				Contact <span className="text-lightBlue">Me</span>
			</h1>
			<form
				ref={form}
				onSubmit={sendEmail}
				action=""
				className="mt-8 flex flex-col items-center text-white">
				<div className="grid lg:grid-cols-2 gap-2 contact-inputs">
					<input
						required
						type="text"
						placeholder="Full Name"
						name="from_name"
					/>
					<input
						required
						type="email"
						placeholder="Email Address"
						name="from_email"
					/>
					<input required type="number" placeholder="Mobile Number" />
					<input required type="text" placeholder="Email Subject" />
				</div>
				<textarea
					required
					name="message"
					id=""
					className="resize-none w-full rounded-md border-[2px] border-lightBlue mt-2 h-64 pl-2 pt-2 mb-2 bg-shade"></textarea>
				<button
					type="submit"
					className="button1 max-lg:mt-3 max-lg:h-10 "
					value="Send">
					Submit
				</button>
			</form>

			{messageVisible && (
				<div className="confirmation-message slide-in text-white mt-4 text-xl confirmation-message">
					Message sent!
				</div>
			)}
		</div>
	);
};

export default ContactMe;
