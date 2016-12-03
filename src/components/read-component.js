import React, { Component } from 'react';
import Header from './header';

class TestComponent extends Component{
  constructor(){
    super();

    this.state = {
      name : 'Farhan',
      clicked : false
    }


//Binding functions that we created.
 this.callName = this.callName.bind(this);

  }

  callName(){

    alert('If you get this alert react is working on the client')

  }

  render(){
    return(
      <html>

      <Header/>

      <body>
          <div>
                <h1>This is the read component</h1>

        </div>

        <script src="/bundle.js"></script>
      </body>


      </html>

    )

  }
}


module.exports = TestComponent;
