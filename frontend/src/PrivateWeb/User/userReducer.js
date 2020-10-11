export default (state = [], action) => {
    switch (action.type) {
      case "FETCH_USERS_DATA":
        return action.items;
      default: 
        return state;
    }
  }