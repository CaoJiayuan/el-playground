axios.interceptors.request.use(config => {
  if (config.local !== true) {
    config.baseURL = process.env.API_BASE_URL;
  }
  return config;
});
