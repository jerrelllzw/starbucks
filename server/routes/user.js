const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
	user: 'root',
	host: 'localhost',
	password: '',
	database: 'starbucks',
});

router.post('/add', (req, res) => {
	username = req.body.username;
	drink = req.body.drink;
	if (drink) {
		db.query(
			'INSERT INTO fav (username, drink) VALUES (?,?)',
			[username, drink],
			(err, result) => {
				if (err) {
					console.log('Drink already exists!');
					res.status(400).send(err);
				} else {
					console.log('Drink added!');
					res.status(200).send();
				}
			}
		);
	} else {
		console.log('Drink cannot be empty!');
		res.status(400).send();
	}
});

router.get('/get/:username', (req, res) => {
	const username = req.params.username;
	db.query(
		'SELECT drink FROM fav WHERE username = ?',
		[username],
		(err, result) => {
			if (err) {
				console.log('Error!');
				res.status(400).send(err);
			} else {
				console.log('Drinks successfully retrieved!');
				res.status(200).send(result);
			}
		}
	);
});

router.delete('/delete/:username/:drink', (req, res) => {
	const username = req.params.username;
	const drink = req.params.drink;
	db.query(
		'DELETE FROM fav WHERE username = ? AND drink = ?',
		[username, drink],
		(err, result) => {
			if (err) {
				console.log('Error!');
				res.status(400).send(err);
			} else {
				console.log('Drink successfully deleted!');
				res.status(200).send(result);
			}
		}
	);
});

module.exports = router;
