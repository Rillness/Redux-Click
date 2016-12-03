require('babel-register')


var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');

//Importing API routes.
var APIRoutes = require('./server/routes');

//Things needed for react router;
var match = require('react-router').match;

app.use('/api', APIRoutes);

//The pages rendered with React.js
app.get( '/', function(req,res){

  //Bring in the routes used with React.
  var ReactDOMServer = require('react-dom/server');
  var routes = require('./src/routes');
  var React = require('react');
  var ReactRouter = require('react-router');
  var RouterContext = React.createFactory(ReactRouter.RouterContext);

  var Provider = require('react-redux').Provider;
  var createStore = require('redux').createStore;

  var reducers = require('./src/reducers/index');

  var store = createStore(reducers);


    match({routes: routes, location: req.url}, function(error, redirectLocation, renderProps) {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {

      // res.send("<!DOCTYPE html>"+
      //     ReactDOMServer.renderToString( RouterContext(renderProps)
      //     )
      //   );

      //This is how it would work with redux

  var allState = ReactDOMServer.renderToString(React.createElement(Provider, { store : store }, RouterContext(renderProps)))


        res.send("<!DOCTYPE html>" + allState)


      } else {
        res.status(404).send('Not found')
      }
    });

});



app.use(express.static(path.join(__dirname, 'src')));

//Setup the port for where to listen.
var PORT = 3000;

app.listen(process.env.PORT || PORT, function(){
  console.log('Listening on port 3000')
});



//GOAL --> Make a MERN boilerplate.
