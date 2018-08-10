/**
 * 浏览器特性检测
 * @param  {[object]} ua       navigator.userAgent 属性
 * @param  {[object]} platform navigator.platform  浏览器所在平台
 * @return {[object]}          os属性和browser属性，描述相关的系统平台信息和浏览器相关信息
 */
export default function detect(ua, platform) {
  ua = navigator.userAgent;
  platform = navigator.platform;
  var os = global.os = {};
  var browser = global.browser = {};
  var webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/);
  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  var osx = !!ua.match(/\(Macintosh\; Intel /);
  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
  var webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/);
  var win = /Win\d{2}|Windows/.test(platform);
  var wp = ua.match(/Windows Phone ([\d.]+)/);
  var touchpad = webos && ua.match(/TouchPad/);
  var kindle = ua.match(/Kindle\/([\d.]+)/);
  var silk = ua.match(/Silk\/([\d._]+)/);
  var blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/);
  var bb10 = ua.match(/(BB10).*Version\/([\d.]+)/);
  var rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/);
  var playbook = ua.match(/PlayBook/);
  var chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/);
  var firefox = ua.match(/Firefox\/([\d.]+)/);
  var firefoxos = ua.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/);
  var ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/);
  var webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/);
  var safari = webview || ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
  var qq = ua.match(/QQ\/([\d.]+)/); // 判断是否是QQ客户端内置浏览器
  var weixin = ua.match(/MicroMessenger\/([\d.]+)/); // 判断是否是微信浏览器
  var ucbrowser = ua.match(/UCBrowser\/([\d.]+)/); // 判断是否是UC浏览器
  var qqbrowser = ua.match(/MQQBrowser\/([\d.]+)/); // 判断是否是QQ浏览器
  // Todo: clean this up with a better OS/browser seperation:
  // - discern (more) between multiple browsers on android
  // - decide if kindle fire in silk mode is android or not
  // - Firefox on Android doesn't specify the Android version
  // - possibly devide in os, device and browser hashes
  if (browser.webkit === !!webkit) browser.version = webkit[1];
  if (android) os.android = true, os.version = android[2];
  if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.');
  if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.');
  if (ipod) os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
  if (wp) os.wp = true, os.version = wp[1];
  if (webos) os.webos = true, os.version = webos[2];
  if (touchpad) os.touchpad = true;
  if (blackberry) os.blackberry = true, os.version = blackberry[2];
  if (bb10) os.bb10 = true, os.version = bb10[2];
  if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2];
  if (playbook) browser.playbook = true;
  if (kindle) os.kindle = true, os.version = kindle[1];
  if (silk) browser.silk = true, browser.version = silk[1];
  if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true;
  if (chrome) browser.chrome = true, browser.version = chrome[1];
  if (firefox) browser.firefox = true, browser.version = firefox[1];
  if (firefoxos) os.firefoxos = true, os.version = firefoxos[1];
  if (ie) browser.ie = true, browser.version = ie[1];
  if (safari && (osx || os.ios || win)) {
    browser.safari = true;
    if (!os.ios) browser.version = safari[1];
  }
  if (webview) browser.webview = true;
  os.tablet = !!(ipad || playbook || (android && !ua.match(/Mobile/)) ||
    (firefox && ua.match(/Tablet/)) || (ie && !ua.match(/Phone/) && ua.match(/Touch/)));
  os.phone = !!(!os.tablet && !os.ipod && (android || iphone || webos || blackberry || bb10 ||
    (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) ||
    (firefox && ua.match(/Mobile/)) || (ie && ua.match(/Touch/))));
  if (os.phone) {
    // 如果是手机端的浏览器
    if (qq) {
      // QQ扫码
      browser.qq = true;
      browser.version = qq[1];
    }
    if (weixin) {
      // 微信
      browser.weixin = true;
      browser.version = weixin[1];
    }
    if (ucbrowser) {
      // UC浏览器
      browser.ucbrowser = true;
      browser.version = ucbrowser[1];
    }
    if (qqbrowser) {
      // QQ浏览器
      browser.qqbrowser = true;
      browser.version = qqbrowser[1];
    }
  }
  return {
    os: os,
    browser: browser
  };
}