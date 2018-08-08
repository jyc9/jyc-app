const getCookie = (name) => {
  var arr,
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if ((arr = document.cookie.match(reg)))
    return arr[2];
  else
    return null;
}
const getRandomIP = () => {
  if (!localStorage.randomIP) {
    localStorage.randomIP = Math.random();
  }
  return localStorage.randomIP;
}
const dateFormat = (date, fmt) => {
  var o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate()
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  return fmt;
}
export {
  dateFormat,
  getCookie,
  getRandomIP
}
