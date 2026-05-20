const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // serve signin.html from /public

// Simple login check
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'rajesh' && password === 'mypassword') {
    res.send('Login successful! Welcome, ' + username);
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
