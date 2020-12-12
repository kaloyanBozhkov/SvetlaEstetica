// build our request object
function requestBuilder(apiBase = 'api') {
  return {
    setEndpoint(endpoint) {
      this.endpoint = endpoint
      return this
    },
    setMethod(method) {
      this.method = method
      return this
    },
    setParams(params) {
      this.params = params
      return this
    },
    setHeaders(headers = {}, excludeAuth = false) {
      // set specific auth by default
      this.headers = excludeAuth ? headers : { ...headers, 'Authorization': process.env.REACT_APP_AUTH_KEY }
      return this
    },
    setBody(body, stringify = true) {
      this.body = stringify ? JSON.stringify(body) : body
      return this
    },
    build() {
      return new Request(apiBase, this.method, this.endpoint, this.params, this.headers, this.body)
    },
  }
}

function Request(apiBase, method, endpoint, params, headers = {}, body) {
  this.fetchApi = function () {
    const url = `${apiBase}/${endpoint}${params ? `/${params}` : ''}`
    return fetch(url, {
      method,
      headers,
      body,
    })
  }
}

module.exports = requestBuilder