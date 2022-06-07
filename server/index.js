const express = require('express');
const cors = require('cors');
const login = require('./routes/login');
const register = require('./routes/register');
const user = require('./routes/user');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/login', login);
app.use('/register', register);
app.use('/user', user);

app.listen(3001, () => {
	console.log('Server started on port 3001!');
});
