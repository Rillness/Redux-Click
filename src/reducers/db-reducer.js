function DbReducer(state = null, action){

  switch (action.type) {

    case 'DB_ALL':

      return 'Got the database'

  }

  return state;

}

module.exports = DbReducer;
