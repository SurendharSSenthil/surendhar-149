const readline = require("readline");

function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

function validateUserEmail() {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	rl.question("Please enter your email: ", (email) => {
		if (isValidEmail(email)) {
			console.log("The email address is valid.");
		} else {
			console.log("The email address is invalid.");
		}
		rl.close();
	});
}

validateUserEmail();
