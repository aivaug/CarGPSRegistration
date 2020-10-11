import {api} from '../../Utils/api';
import history from '../../Utils/history';

export const fetchAPIKeysData = () => dispatch => {
  api.get('api/apikey',  {
    headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token },
  })
    .then(response => {
      dispatch({
        type: "FETCH_APIKEYS_DATA",
        items: response.data
      });
    })
    .catch(function () {
      // add logic for handling errors in the future
    });
};

export const deleteAPIKeyData = (id) => dispatch => {
  api.delete('api/apikey/'+id,  {
    headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token },
  })
    .then(response => {
      dispatch({
        type: "FETCH_APIKEYS_DATA",
        items: response.data
      });
    })
    .catch(function () {
      // add logic for handling errors in the future
    });
}

export const HandleAPIKeyData = (data) => dispatch => {
    if(typeof window.location.href.split('/')[window.location.href.split('/').length-1] !== 'undefined'
      && window.location.href.split('/').length > 5)
    {
      api
      .put("api/apikey/"+window.location.href.split('/')[window.location.href.split('/').length-1], {
        Key: data.APIKey,
        ValidTo: data.ValidTo,
      }, {
        headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token },
      })
      .then(response => {
        history.push(`/pr/keys`);
      })
      .catch(function () {
        // add logic for handling errors in the future
      });
    } else{
      api
      .post("api/apikey", {
         Key: data.APIKey,
         ValidTo: data.ValidTo,
      }, {
        headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token },
      })
      .then(response => {
        history.push(`/pr/keys`);
      })
      .catch(function () {
        // add logic for handling errors in the future
      });
    }
  }
