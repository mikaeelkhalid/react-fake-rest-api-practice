import axios from 'axios';

export const requestGetAirlines = () => {
  return axios.request({
    method: 'get',
    url: 'https://api.instantwebtools.net/v1/airlines',
  });
};
