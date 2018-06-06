const Data = require('./dataModel');
//const Data = require('./../db/dataModel');

var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyD-B9yL_qkpkcmHC9G6zE2i-odPFNKoEP4'
  });

  const googleApiHandler = (req, res, next) => {
      console.log('In API Handler');
      googleMapsClient.geocode({
            address: req.body.name
          }, function(err, response) {
            if (!err) {
              console.log('In server side - google map result[0].formatted_address: ',response.json.results[0].formatted_address);
              req.body.googleInfo.push(response.json.results[0].formatted_address)
              console.log('req.body.googleInfo',req.body.googleInfo );
              next();
            } else {
              console.log('Error: ',err);
             next();
            }
          });  
}

const getData = (req, res) => {
    Data.find({}, (err, foundData) => {
        if(err) {
            return res.end(err);
        } else {
            res.send(foundData);
        }
    });
  };

const postData = (req, res) => {
    console.log('Req-body:' , req.body);
    console.log('In post data!')
    const DataToSave = {
      name: req.body.name,
      tags: req.body.tags,
      googleInfo: req.body.googleInfo,
    }
     console.log('Data To Save: ', DataToSave);
    Data.create(DataToSave, (err, savedData) => {
        console.log('In Data.create');
      if (err){
        console.log('err',err); 
        return res.end(err);
      } 
      else res.status(200).send(savedData);
      console.log('Saving to DB')
    });
   
  }

  module.exports = {googleApiHandler, getData, postData};