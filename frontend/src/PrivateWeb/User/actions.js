import {api} from '../../Utils/api';
import history from '../../Utils/history';
import { USER_CREATE_EXISTS } from "../../PublicWeb/actions"

export const fetchUsersData = () => dispatch => {
  api.get('api/user',  {
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
};

export const deleteUserData = (id) => dispatch => {
  api.delete('api/user/'+id,  {
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

export const CreateNewUser = (data) => dispatch => {
    api
    .post("api/user", {
        Email: data.Email
    }, {
      headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token },
    })
    .then(response => {
      history.push(`/pr/users`);
    })
    .catch((err) => {
      dispatch({
        type: USER_CREATE_EXISTS,
        error: err.response.data
      })
  });
}
