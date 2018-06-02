
const processReducer = (state = {data: ""}, action) => {
  switch (action.type) {
    case 'DO_ACTION_FULFILLED':
    {
        console.log(action.payload.data);
      return state + " " + action.payload.data;
    }
    default:
      return state
  }
}

export default processReducer
