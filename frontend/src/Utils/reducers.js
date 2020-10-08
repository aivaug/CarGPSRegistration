import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// import userReducer from '../StaticWebsite/Auth/userReducer';

// import vehicleReducer from '../Components/SearchTrip/vehicleReducer';
// import routeReducer from '../Components/SearchTrip/routeReducer';
// import employeeReducer from '../Components/SearchTrip/employeeReducer';

// import personnelReducer from '../Components/TripSearches/personnelReducer';
// import documentsReducer from '../Components/TripSearches/documentsReducer';
// import positionsReducer from '../Components/TripSearches/positionsReducer';
// import holidaysReducer from '../Components/TripSearches/holidaysReducer';

// // import postsReducer from '../Components/Trips/postsReducer';
// import warehouseReducer from '../Components/User/warehouseReducer';
// import UsersReducer from '../Components/AdminData/usersReducer';
// import profileReducer from '../Components/User/profileReducer';
// // import providerReducer from '../Components/Trips/providerReducer';

const reducer = combineReducers({
    form: formReducer,

    // user: userReducer,

    // vehicle: vehicleReducer,
    // route: routeReducer,
    // reviews: employeeReducer,
    
    // // posts: postsReducer,
    // // providers: providerReducer,
    // cars: warehouseReducer,
    // users: UsersReducer,

    // profile: profileReducer,
    
    // personnel: personnelReducer,
    // searchResults: documentsReducer,
    // positions: positionsReducer,
    // tripSearches: holidaysReducer
});

export default reducer;
