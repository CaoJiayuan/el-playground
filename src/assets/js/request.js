import Handler from './handler';
import Excption from '../../components/exception';

const isDev = process.env.NODE_ENV === 'development';
let ele = ELEMENT;

axios.interceptors.request.use(config => {
  if (config.local !== true) {
    config.baseURL = process.env.API_BASE_URL;
  }
  return config;
});

axios.interceptors.response.use(response => response, error => {
  if (error.response) {
    renderException(error.response);
  }
  return Promise.reject(error);
});


function renderException(response) {

  if (ele) {
    if (isDev && response.status >= 500) {
      const handler = new Handler(response.data)
      handler.render();
    }

    ele.Message({
      message: response.data.message,
      center : true,
      type   : 'error'
    });
  }
}
