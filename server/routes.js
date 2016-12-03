var express = require('express');
var Router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://fr:abc@ds117348.mlab.com:17348/clickedy');

var ClickSchema = mongoose.Schema({
  clicks : 0
});

var Clicks = mongoose.model('Clicks', ClickSchema);

var dbID = '5840f8fee78f6738f806cfeb';



Router.get('/all', function(req,res){


  Clicks.findById(dbID, function(err,body){
    if(err){
      console.log(err)
    }else{
      res.send(body)
    }
  });


})

Router.post('/add', function(req,res){


  Clicks.findById(dbID, function(err,body){
    if(err){
      console.log(err)
    }else{

        Clicks.findByIdAndUpdate(dbID, { clicks : body.clicks + 1}, function(err,body){

          if(err){
            console.log(err)
          }else{
            console.log(body);
          }

        })

    }
  });



  res.send('Added')

});

Router.post('/minus', function(req,res){


  Clicks.findById(dbID, function(err,body){
    if(err){
      console.log(err)
    }else{

        Clicks.findByIdAndUpdate(dbID, { clicks : body.clicks - 1}, function(err,body){

          if(err){
            console.log(err)
          }else{
            console.log(body);
          }

        })

    }
  });


  res.send('Subbtracted')

});


module.exports = Router;
