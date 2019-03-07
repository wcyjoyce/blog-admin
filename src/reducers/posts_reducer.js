const postsReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCH_POSTS": {
      return action.payload; // action.payload is an array
    }
    case "FETCH_POST": {
      return [ action.payload ]; // action.payload is an object ("{}") so need to convert into an array ("[]")
    }
    case "FETCH_POST": {
      return [ action.payload ];
    }
    case "CREATE_POST": {
      // callback handles the action, no need to return anything in reducer
    }
    default:
      return state; // state is "[]" if undefined
  }
}

export default postsReducer;
