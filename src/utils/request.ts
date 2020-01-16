import axios from "axios";

export default {
  request(method: any, url: string | undefined, options: any) {
    var promise: any = null;
    var params: {} = {};
    var headers: {} = {};

    if (options.params) {
      // リクエストパラメーターのセット
      params = options.params;
    }
    if (options.headers) {
      // カスタムヘッダーのセット
      headers = options.headers;
    }
    // if (options.auth) {
    //   // ヘッダーにAuthorizationをセット
    //   var authorization_header = JSON.parse(
    //     localStorage.getItem("AuthenticationHeader")
    //   );
    //   headers = Object.assign(headers, authorization_header);
    // }
    // // RailsのCSRFトークンをセット
    // const token = document
    //   .getElementsByName("csrf-token")[0]
    //   .getAttribute("content");
    // headers["X-CSRF-TOKEN"] = token;

    promise = axios({
      method: method,
      url: url,
      data: params,
      headers: headers
    });
    promise.catch(function() {
      // return console.log(promise);
    });
    return promise;
  },
  get(url: string, options: {}) {
    return this.request("get", url, options);
  },
  post(url: string, options: {}) {
    return this.request("post", url, options);
  },
  put(url: string, options: {}) {
    return this.request("put", url, options);
  },
  delete(url: string, options: {}) {
    return this.request("delete", url, options);
  }
};
