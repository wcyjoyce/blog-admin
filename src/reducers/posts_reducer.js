const postsReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCH_POSTS": {
      return action.payload; // action.payload is an array
    }
    case "FETCH_POST": {
      return [ action.payload ]; // action.payload is an object ("{}") so need to convert into an array ("[]")
    }
    default:
      return state; // state is "[]" if undefined
  }
}

// no need to create "CREATE_POST" - callback handles the action, therefore nothing to return anything in reducer

export default postsReducer;
