axios.interceptors.request.use(config => {
  if (config.local !== true) {
    config.baseURL = process.env.API_BASE_URL;
  }
  return config;
});


axios.interceptors.response.use(undefined, error => {
  if (error.response) {
    if (ELEMENT) {
      ELEMENT.Message({
        message: error.response.data.message,
        type: 'error'
      })
    }
  }
})
