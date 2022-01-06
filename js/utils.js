//判断是否在微信中
function isWechat() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/Micromessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}
// 判断安卓
function isAndroid() {
  var u = navigator.userAgent;
  if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
    if (window.ShowFitness !== undefined) return true;
  }
  return false;
}
// 判断 ios
function isIos() {
  var u = navigator.userAgent;
  if (u.indexOf("iPhone") > -1 || u.indexOf("iOS") > -1) {
    return true;
  }
  return false;
}
// 判断 在PC中
function isPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
      }
  }
  if(window.screen.width>=768){
      flag = true;
  }
  return flag;
}
// 判断 在PC中 写法2
function goPAGE() {
  var flag = true;
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      // alert("mobile")
      flag = false;
  }
  else {
      // alert("pc")
      flag = true;
  }
  return flag;
}
// JavaScript Document
function loadjscssfile(filename,filetype){

  if(filetype == "js"){
      var fileref = document.createElement('script');
      fileref.setAttribute("type","text/javascript");
      fileref.setAttribute("src",filename);
  }else if(filetype == "css"){
  
      var fileref = document.createElement('link');
      fileref.setAttribute("rel","stylesheet");
      fileref.setAttribute("type","text/css");
      fileref.setAttribute("href",filename);
  }
 if(typeof fileref != "undefined"){
      document.getElementsByTagName("head")[0].appendChild(fileref);
  }
  
}