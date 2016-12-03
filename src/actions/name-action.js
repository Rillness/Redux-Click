//Here is a sample action.

function getName(name){


  return{
    type : 'NAME_CLICKED',
    payload : name
  }

}

module.exports = getName;
