function login(username, password) {
	// Check username null or empty
	if (username === null || typeof(username) === 'undefined' || username === '') {
		return {
			success: false,
			message: 'Felaktig input'
		};
	}
	// Check password null or empty
	if (password === null || typeof(password) === 'undefined' || password === '') {
		return {
			success: false,
			message: 'Felaktig input'
		};
	}

	// Check username and password is it valid
	if (username !== 'admin' || password !== 'password123') {
		return {
			success: false,
			message: 'Felaktig användarnamn eller lösenord'
		};
	}

	// Valid return success
	return {
		success: true,
		message: 'Success'
	};
}

module.exports = login;