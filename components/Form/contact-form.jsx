import LanguageContext from '@/context/language';
import React, { useContext, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
	const ctx = useContext(LanguageContext);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_xfwbvrw', 'template_r6pco4l', form.current, 'vkpbqgRrDvMITEzRs').then(
			(result) => {
				console.log(result.text);
				setName('');
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
		<div className=" p-4">
			<form ref={form} onSubmit={sendEmail}>
				<div className=" flex flex-col">
					<label className=" uppercase py-2 text-sm">{!ctx.english ? 'Imię' : 'Name'}</label>
					<input
						onChange={(event) => setName(event.target.value)}
						id="name"
						name="name"
						type="text"
						className=" flex border-2 border-gray-300 rounded-lg p-3"
						placeholder={!ctx.english ? 'Twoje imię' : 'Your name'}
						required
						maxLength="20"
						value={name}
					/>
				</div>
				<div className=" flex flex-col py-2">
					<label className=" uppercase py-2 text-sm">Email</label>
					<input
						onChange={(event) => setEmail(event.target.value)}
						id="email"
						name="email"
						type="email"
						className=" flex border-2 border-gray-300 rounded-lg p-3"
						placeholder={!ctx.english ? 'Twój adres email' : 'Your email adress'}
						required
					/>
				</div>
				<div className=" flex flex-col py-2">
					<label className=" uppercase py-2 text-sm">{!ctx.english ? 'Temat' : 'Subject'}</label>
					<input
						onChange={(event) => setSubject(event.target.value)}
						id="subject"
						name="subject"
						type="text"
						className=" flex border-2 border-gray-300 rounded-lg p-3"
						placeholder={!ctx.english ? 'Podaj temat wiadomości' : 'State the subject of your message'}
						required
						maxLength="20"
					/>
				</div>
				<div className=" flex flex-col py-2">
					<label className=" uppercase py-2 text-sm">{!ctx.english ? 'Wiadomość' : 'Message'}</label>
					<textarea
						onChange={(event) => setMessage(event.target.value)}
						cols="30"
						rows="10"
						id="message"
						name="message"
						className=" border-2 border-gray-300 rounded-lg p-3"
						placeholder={!ctx.english ? 'Treść wiadomości' : 'Your message'}
						required
						maxLength="200"
					/>
				</div>
				<div>
					<button
						// onClick={() => sendEmail()}
						className=" w-full p-4 mt-4 text-gray-200"
					>
						{!ctx.english ? 'Wyślij wiadomość' : 'Send message'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
