import React, { Component } from 'react';
import Header from '../components/header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


//Import the actions we will need.
import getName from '../actions/name-action';
import { addAction, minusAction } from '../actions/clicker-action';

class ReduxExample extends Component{
  constructor(){
    super();

    this.state = {
      name : 'Farhan',
      clicked : false
    }


//Binding functions that we created.
 this.callName = this.callName.bind(this);
 this.reduxAction = this.reduxAction.bind(this);
 this.addNumber = this.addNumber.bind(this);
 this.minusNumber = this.minusNumber.bind(this);

  }

  callName(){

    alert('If you get this alert react is working on the client')

  }

//Number adding action.
  addNumber(){
    this.props.addAction();
  }

//Number subtracting action.

  minusNumber(){
    this.props.minusAction();
  }


  reduxAction(){
    this.props.getName();
  }

  render(){
    return(
      <html>

      <Header/>

      <body>
          <div>
                <h1 onClick={this.reduxAction}>This is the redux component</h1>

        {this.props.myName.map((name,i) => {
                      return(
                          <h2 key={i} onClick={this.reduxAction}>{name.name}</h2>
                      )
                    })}


            <button onClick={this.addNumber}> + </button>
            <button onClick={this.minusNumber}> - </button>

          <br/> <br/>

        <h1>{this.props.clickNumber}</h1>

        </div>

        <script src="/bundle.js"></script>
      </body>


      </html>

    )

  }
}


//Dispatching the actions.
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getName : getName,
    minusAction : minusAction,
    addAction : addAction
  }, dispatch);
};

//Dispatching the state.
function mapStateToProps(state){
  return{
    myName : state.testReducer,
    clickNumber : state.clickReducer
  }
}



module.exports = connect(mapStateToProps, mapDispatchToProps)(ReduxExample);
