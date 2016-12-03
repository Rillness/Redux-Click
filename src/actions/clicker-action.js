import axios from 'axios';


function addAction(state){


  console.log('ADDED')

  axios.post('/api/add');

  return{
    type : 'ADD_NUM',
    payload : state
  }

}

function minusAction(state){

  console.log('SUBTRACTED')

  axios.post('/api/minus');

  return{
    type : 'MINUS_NUM',
    payload : state
  }

}

function dbAction(state){

  console.log(state)

  return{
    type : 'DB_ALL',
    payload : state
  }

}

module.exports = {
  addAction : addAction,
  minusAction : minusAction,
  dbAction : dbAction
}
