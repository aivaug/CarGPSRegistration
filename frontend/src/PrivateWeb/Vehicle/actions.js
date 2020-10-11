import {api} from '../../Utils/api';
import history from '../../Utils/history';

export const fetchVehiclesData = () => dispatch => {
  api.get('api/vehicle',  {
    headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token },
  })
    .then(response => {
      dispatch({
        type: "FETCH_VEHICLES_DATA",
        items: response.data
      });
    })
    .catch(function () {
      // add logic for handling errors in the future
    });
};
export const deleteVehicleData = (id) => dispatch => {
  api.delete('api/vehicle/'+id,  {
    headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token },
  })
    .then(response => {
      dispatch({
        type: "FETCH_VEHICLES_DATA",
        items: response.data
      });
    })
    .catch(function () {
      // add logic for handling errors in the future
    });
}

export const setRole = (id, role) => dispatch => {
    api
    .put("api/admindata/role/"+id, {
      userRole: role
    }, {
      headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token },
    })
    .then(response => {
      dispatch({
        type: "FETCH_USERS_DATA",
        items: response.data
      });
    })
    .catch(function () {
      // add logic for handling errors in the future
    });
}

export const HandleVehicleData = (data) => dispatch => {
  if(typeof window.location.href.split('/')[window.location.href.split('/').length-1] !== 'undefined'
    && window.location.href.split('/').length > 5)
  {
    api
    .put("api/vehicle/"+window.location.href.split('/')[window.location.href.split('/').length-1], {
      Brand: data.Brand,
      Model: data.Model,
      YearManufactured: data.YearManufactured
    }, {
      headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token },
    })
    .then(response => {
      history.push(`/pr/vehicles`);
    })
    .catch(function () {
      // add logic for handling errors in the future
    });
  } else{
    api
    .post("api/vehicle", {
        Brand: data.Brand,
        Model: data.Model,
        YearManufactured: data.YearManufactured
    }, {
      headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token },
    })
    .then(response => {
      history.push(`/pr/vehicles`);
    })
    .catch(function () {
      // add logic for handling errors in the future
    });
  }
}
