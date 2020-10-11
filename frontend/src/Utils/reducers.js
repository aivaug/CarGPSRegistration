import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from '../PublicWeb/Auth/userReducer';

import vehicleReducer from '../PrivateWeb/Vehicle/vehicleReducer';
import userReducer from '../PrivateWeb/User/userReducer';
import keyReducer from '../PrivateWeb/APIKeys/apiKeyReducer';

const reducer = combineReducers({
    form: formReducer,

    auth: authReducer,

    vehicle: vehicleReducer,

    user: userReducer,

    key: keyReducer,
});

export default reducer;
