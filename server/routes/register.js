const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
	user: 'root',
	host: 'localhost',
	password: '',
	database: 'starbucks',
});

router.post('/', (req, res) => {
	username = req.body.username;
	password = req.body.password;
	if (username) {
		db.query(
			'INSERT INTO members (username, password) VALUES (?,?)',
			[username, password],
			(err, result) => {
				if (err) {
					console.log('Error!');
					res.status(400).send(err);
				} else {
					console.log('Registration successful!');
					res.status(200).send();
				}
			}
		);
	} else {
		console.log('Username cannot be empty!');
		res.status(400).send();
	}
});

module.exports = router;
