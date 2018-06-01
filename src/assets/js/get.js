import { Storage, httpQueryString } from './utils'

const storage = new Storage();

const Api = {
  getData (url, params = {}, cacheExpire = 0, config = {}) {

    let conf = Object.assign({
      params: params
    }, config);
    if (cacheExpire > 0) {
      let key = url + '?' + httpQueryString(params);
      let data = storage.get(key)
      if (data && data.expires_in > new Date().getTime()) {
        return Promise.resolve(data.data)
      } else  {
        let expires_in = new Date().getTime() + (60 * cacheExpire * 1000)
        return axios.get(url, conf).then(response => {
          data = {
            expires_in,
            data : response
          }
          storage.put(key, data);

          return response;
        })
      }
    }

    return axios.get(url, conf)
  }
}

export default Api;
