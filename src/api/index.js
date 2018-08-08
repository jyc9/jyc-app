import config from "./config";
import withAxios from "./util";
import Vue from 'vue'

//定义插件对象


const Api = {  //  定义一个对象
  install(Vue, options) {  // 需要拥有一个 install 方法
    Vue.prototype.$api = withAxios(config);
  }
}

export default Api;
