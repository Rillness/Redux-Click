//A reducer just renders the state of the application. That's it.

function testReducer(state, action){
  return [
    {name : 'Farhan', age : 17},
    {name : 'Adam', age : 20},
    {name : 'Stephanie', age : 17}
  ]
}

module.exports = testReducer;
