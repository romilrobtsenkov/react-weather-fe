import axios from 'axios'
import nprogress from 'nprogress'

const BASE_URL = '/api'

export default function (method, url, query) {
  nprogress.start()

  return axios
    .request({
      method: method,
      baseURL: BASE_URL, // NB `baseURL` will be prepended to `url` unless `url` is absolute.
      url: url,
      data: query.data || {}, // PUT, POST, PATCH body
      params: query.params || {} // url params
    })
    .then(response => {
      nprogress.done()

      return Promise.resolve(response.data)
    })
    .catch(err => {
      nprogress.done()

      console.error(err)
      return Promise.reject(err.response)
    })
}
