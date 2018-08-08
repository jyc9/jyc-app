import axios from "axios";
let httpArr = {},
  cancelToken = axios.CancelToken,
  limit = 400;


axios.interceptors.request.use(function (config) {
  let now = +new Date(),
    key = config.method + config.url,
    param = JSON.stringify(config.params),
    cancelFun;
  config.cancelToken = new cancelToken((c) => {
    //获取取消请求方法
    cancelFun = c;
  });
  if (httpArr[key] && httpArr[key].paramStr == param && httpArr[key].start + limit > now) {
    cancelFun();
  } else {
    if (httpArr[key] && httpArr[key].paramStr == param && httpArr[key].start + limit <= now) {
      httpArr[key].cancel();
    }
    httpArr[key] = {
      start: +new Date(),
      paramStr: param,
      cancel: cancelFun
    }
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use( //请求拦截
  response => {
    let config = response.config,
      key = config.method + config.url;
    if (httpArr[key]) delete httpArr[key];
    if (!response.data.success){
      console.log("toast"+response.data.i18nMessage);
    }
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.log("清除登录信息");
          break;
      }
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  }
);
const withAxios = apiConfig => {
  let facade = {}
  for (var prop in apiConfig) {
    let options = apiConfig[prop];
    let method = options.type;
    let url = options.url;
    facade[prop] = async function(data = {}){
      let key = "params";
      if (method === "post" || method === "put") {
        key = "data";
      }
      return axios({
        method,
        url: "/api/" + url,
        [key]: data
      });
    };
  }
  return facade
};
export default withAxios;
