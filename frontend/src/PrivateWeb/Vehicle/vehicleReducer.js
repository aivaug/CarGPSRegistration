export default (state = [], action) => {
    switch (action.type) {
      case "FETCH_VEHICLES_DATA":
        return action.items;
      default: 
        return state;
    }
  }