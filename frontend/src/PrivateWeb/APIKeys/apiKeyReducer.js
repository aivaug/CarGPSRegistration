export default (state = [], action) => {
    switch (action.type) {
      case "FETCH_APIKEYS_DATA":
        return action.items;
      default: 
        return state;
    }
  }