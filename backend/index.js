const express = require("express");
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }))

// Verification page for abused
app.get('/verify', (req, res) => {
	res.send('')
});

// Mainmenu for abused
app.get("/", (req, res) => {
	res.send("Hello World!");
});

// Mainmenu for abuser
app.get("/error", (req, res) => {
	res.send("Error!");
});

// Ordering system for women
app.get("/order", (req, res) => {
	res.send("Order pizza")
});

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});

// Middleware function for Face recognition API
function checkFace(req, res, next){
	res.redirect('/');
};
