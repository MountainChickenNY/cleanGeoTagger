const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const googleMapsClient = require('@google/maps').createClient({
	key: 'AIzaSyD-B9yL_qkpkcmHC9G6zE2i-odPFNKoEP4'
	});
	
const dataController = require('./dataController');
const userController = require('./userController');

app.use(bodyParser.json());
app.use(express.static(__dirname + './../dist')); //?


// connect to mongo database
mongoose.connect('mongodb://YanYan123:YanYan789@ds147890.mlab.com:47890/mountainchicken')
.then(() => {
  console.log('did it work? i hope so')
}).catch(err => console.log(err));

app.get('/');
app.get('/login');
app.get('/signup');

app.get('/getResults', dataController.getData);
app.post('/addLocation', dataController.googleApiHandler, dataController.postData);
app.post('/signup', userController.createUser);
app.post('/login', userController.verifyUser);

app.listen(3000, (err, res) => {
	if (err) return err;
	console.log('Listening on port 3000');
});

