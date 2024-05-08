import { useState } from 'react';

const styles = {
	form: {
		display: 'flex',
		flexDirection: 'column',
		padding: '20px'
	}
}

export default function ContactForm() {
	const [personalName, setPersonalName] = useState('');
	const [emailAddress, setEmail] = useState('');
	const [messageContent, setMessage] = useState('');

	// Whenever a change is made to any of the fields, we would like to update its respective state variable
	const handleInputChange = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case 'personalName':
				setPersonalName(value);
				break;
			case 'emailAddress':
				setEmail(value);
				break;
			case 'messageContent':
				setMessage(value);
				break;
		};

	};

	const handleFormSubmit = (e) => {
		e.preventDefault(); // Prevents page refresh

		setPersonalName('');
		setEmail('');
		setMessage('');
	}

	// Investigate how to generate a warning when a user clicks away from a required field leaving an empty object
		// May be possible to create state variable(s) handling a valid response and conditionally rendering 
		// Would a useEffect hook be useful here? 

	// As we are deploying to Netlify, I added this attribute to allow form submission through their service
	return (
		<div className = 'container'> 
			<form  style={styles.form} name='contact' method='POST' data-netlify='true'>
				<label for='personalName'>Name: </label>
				<input
					value={personalName}
					name='personalName'
					onChange={handleInputChange}
					type='text'
				/>
				<label for='emailAddress'>Email Address: </label>
				<input 
					value={emailAddress}
					name='emailAddress'
					onChange={handleInputChange}
					type='email'
				/>
				<label for='messageContent'>Message: </label>
				<textarea
					value={messageContent}
					name='messageContent'
					onChange={handleInputChange}
					type='text'
					rows="8" 
					cols="50"		
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)	
}