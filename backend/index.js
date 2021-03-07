if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

const express = require("express");
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }))

// Twilio
app.get('/', (req, res) => {

	// TEXT MESSAGE
	var accountSid = 'AC92f2accb0d20fbc614a651bccff09ae4'; // Your Account SID from www.twilio.com/console
	var authToken = process.env.TWILIO_AUTH;   // Your Auth Token from www.twilio.com/console

	var twilio = require('twilio');
	var client = new twilio(accountSid, authToken);

	client.messages.create({
	body: 'Hello from Node post function',
	to: '+17789291864',  // Text this number
	from: '+17786523386' // From a valid Twilio number - Suppose this is 
	})
	.then((message) => res.send('The message was sent'))

	// TEXT MESSAGE
})

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});
