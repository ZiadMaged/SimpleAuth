const db = require('./config/database.js'); 
const register = require('./controller/register.js');
const login = require('./controller/login.js');
const me = require('./controller/me.js');
const auth = require('./middleware/auth.js');
const express = require('express');
const app = express();
app.use(express.json());

db.connect();

app.post('/register', register);
app.post('/login', login);
app.get('/me', auth , me);

app.listen(1000, ()=> {
    console.log("Server is running on port 1000 ...");
})
