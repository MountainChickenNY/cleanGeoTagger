const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + './../dist'));




app.listen(3000, (err, res) => {
	if (err) return err;
	console.log('Listening on port 3000');
});