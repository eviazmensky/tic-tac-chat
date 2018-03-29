// class to decouple whatever http client we would want to use in the future.
// change it once here instead of having it sprinkled throughout the app
// todo: common error handling


import Axios from 'axios';

export default class Http {

  constructor(Axious) {
    this.axios = new Axios();
  }

 get(url) {
    return Axios.get(url);
  }

  post(url, payload) {
    return this.axios.post(url, payload)
  }

  put(url, payload) {
    return this.axios.put(url, payload)
  }

  delete(url) {
    return this.axios.delete(url);
  }

}