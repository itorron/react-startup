import axios from 'axios';

import config from '../config';

export default function appDataService() {
  const {
    host,
    apiURIs: { appData },
  } = config;

  const params = {
    formato: 'json',
  };

  const uri = `${host}${appData}`;

  return axios.get(uri, { params }).then(res => {
    let data = res.data;
    try {
      data = JSON.parse(data.trim());
    } catch (e) {}
    return data;
  });
}
