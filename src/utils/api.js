import axios from 'axios'

const BASE_URL = '/api'

export default function (method, url, query) {
  return axios
    .request({
      method: method,
      baseURL: BASE_URL, // NB `baseURL` will be prepended to `url` unless `url` is absolute.
      url: url,
      data: query.data || {}, // PUT, POST, PATCH body
      params: query.params || {} // url params
    })
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(err => {
      console.error(err)
      return Promise.reject(err.response)
    })
}
