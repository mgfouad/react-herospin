import axios from 'axios';
import consts from './consts';

const instance_axios = axios.create({
  baseURL: consts.domain,

  // headers: {
  //   'Accept-Encoding': 'gzip, deflate',
  // },
});

// Add a response interceptor
// instance_axios.interceptors.response.use(
//   function (response) {
//    if (
//     response.error
//     ) {
//       // redirect to error page
//     } else {
//       return response;
//     }
//   },
// );

export default instance_axios;
