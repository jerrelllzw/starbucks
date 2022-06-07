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
	db.query(
		'SELECT * FROM members WHERE username = ? AND password = ?',
		[username, password],
		(err, result) => {
			if (err) {
				console.log('Error!');
				res.status(400).send(err);
			} else if (result.length === 0) {
				console.log('User not found!');
				res.status(400).send();
			} else {
				console.log('Login successful!');
				res.status(200).send();
			}
		}
	);
});

module.exports = router;
