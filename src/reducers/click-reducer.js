

function ClickReducer(state = 0, action){

  switch (action.type) {

    case 'ADD_NUM':

      return action.payload + 1;

    case 'MINUS_NUM':

      return action.payload - 1;

  }

  return state;

}

module.exports = ClickReducer;
