import React, { Component } from 'react';
import Header from '../components/header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

//Importing actions.
import { addAction, minusAction, dbAction } from '../actions/clicker-action'


class Home extends Component{

  constructor(props){
    super(props)


//Setting up a simple state.
    this.state = {
      clickedNumber : 'Searching....'
    }

    //Binding the functions
    this.clickedPlus = this.clickedPlus.bind(this);
    this.clickedMinus = this.clickedMinus.bind(this);
    this.queryDB = this.queryDB.bind(this);
  }

  componentWillMount(){


    this.queryDB();

  //Get the reducer that holds the database info.
      //console.log(this.props.dbReducer);

  }

  queryDB(){

    axios.get('/api/all')
      .then((result) => {
        //Call an action that gets the database info.
          var allClicks = result.data.clicks;

            this.setState({
              clickedNumber : allClicks
            })

      //  console.log(this.props.dbAction(this.state.clickedNumber))

        })

  }

  clickedPlus(){
    this.props.addAction(this.state.clickedNumber);

    this.setState({
       clickedNumber : this.state.clickedNumber + 1
    })

  }

  clickedMinus(){
    this.props.minusAction(this.state.clickedNumber);

    this.setState({
       clickedNumber : this.state.clickedNumber - 1
    })

  }

  render(){
    return(
      <html>

      <Header/>

      <body>

      <div>
        <h1>MERN + Redux Clicker</h1>

<div style={{textAlign : 'center'}}>
      <button onClick={this.clickedPlus}> + </button>
      <button onClick={this.clickedMinus}> - </button>
</div>
          <hr/>

<h4>Number saved in MongoDB database.</h4>
<h1>{this.state.clickedNumber}</h1>

<br />
<br />
<br />

<p>Yeah, I used a really complicated web app setup, to make the simplest project, because I don't give a fuck. </p>

<a href="https://wwww.google.com">Source Code</a>

  </div>

        <script src="/bundle.js"></script>
      </body>


      </html>



    )
  }
}

function mapStateToProps(state){
  return{
    clickedNumber : state.clickReducer,
    dbReducer : state.DBReducer
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addAction : addAction,
    minusAction : minusAction,
    dbAction : dbAction
  }, dispatch)
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Home);



//Goal for this program. Make an API, and call it using redux.
