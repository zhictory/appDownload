/**
 *  ---------------------------------------------
 *      APP下载提示
 * 
 *      功能：
 *      从WAP页调起App时，系统如果没有安装App则下载App，如果有安装App则打开App。

 *      注意：
 *      1. 暂时只能不同平台使用不同方式，不能不同平台使用同一方式
 *      2. 各方式优先的原因：能打开App -> 能下载App -> 能传参 -> 步骤相对简单
 *      3. 安卓的还没对接打开对应详情页的功能
 *      4. 微信内置浏览器Android和iOS版都无法打开对应详情页（因为借助应用宝）
 *      5. 微博内置浏览器Android版有无安装App都只能下载不能打开，
 *         微博内置浏览器iOS版有无安装均不能下载和打开
 *      6. 考察的浏览器：微信内置浏览器、微博内置浏览器、QQ内置浏览器、
 *                       UC浏览器、QQ浏览器、Safari、Chrome、Opera
 *      7. 暂时无法判断是否系统有安装App
 *      8. 暂时无法在调起App后取消下载App
 *      9. 此插件代码依赖于base.js中的平台检测（detect方法）

 *      使用：
 *      在逻辑js引入：let download = require(`/widget/Download/main`);
 *      样式已经放在common.less
 *  ---------------------------------------------
 */
import './style.less';

import tplDownloadTips from './tplDownloadTips.html';
import detect from './detect.js';

function Download() {
  this._URLS = {
    yybUrl: `http://a.app.qq.com/o/simple.jsp?pkgname=com.bluemobi.jinhaima`,//应用宝下载链接
    AndroidUrl: `jinhaima://kinhomapp`,//安卓打开金海马商城的链接
    iOSUrl: `com.kinhom.JinHaiMa://com.kinhom.JinHaiMa`,//苹果打开金海马商城的链接
    downloadUrl: `http://api.kinhom.com/download/index`//金海马商城下载链接（包括iOS版和Android版的）
    // itunesUrl: `http://itunes.apple.com/cn/app/id1011663719`,//App Store下载链接
    // apkUrl: `http://dd.myapp.com/16891/6B4194FC7A35489E725A4328D92A9C65.apk?fsname=com.bluemobi.jinhaima_1.4.1_7.apk`//金海马商城下载链接
  };
  this.init();
  this.openBtn = `#J_appDownload .j_open`;
  this.closeBtn = `#J_appDownload .j_close`;
  this.wrap = `#J_appDownload`;
  this.platforms = this.getPlatform(detect(navigator.userAgent, navigator.platform));
  this.skuId = `01`;
}

Download.prototype = {
  // 初始化
  init: function () {
    const self = this;
    // 如果是详情页则添加sku参数
    if (location.href.indexOf(`item`) > -1) {
      self._URLS.AndroidUrl += `?sku_id=` + self.skuId;
      self._URLS.iOSUrl += `?sku_id=` + self.skuId;
    }
    // 延时加载是为了优先加载主页面
    let downTimer = setTimeout(function () {
      clearTimeout(downTimer);
      const div = document.createElement(`div`);
      div.innerHTML = tplDownloadTips;
      document.body.appendChild(div);
      self.setOpen();
      self.setClose();
    }, 200);
  },
  // “立即打开”按钮
  setOpen: function () {

    const self = this;

    document.querySelector(self.openBtn).addEventListener(`click`, (event)=>{

      const btn = event.target;

      btn.classList.remove(`j_open`);

      if (self.platforms.os.iphone) {
        if (self.platforms.browser.weixin) {
          self.openUrl(self._URLS.yybUrl, false, btn);
        } else if (self.platforms.browser.qq || self.platforms.browser.opera) {
          self.openUrl(self._URLS.downloadUrl, false, btn);
        } else {
          self.openUrl(self._URLS.iOSUrl, true, btn);
        }
      } else if (self.platforms.os.android) {
        if (self.platforms.browser.weixin) {
          self.openUrl(self._URLS.yybUrl, false, btn);
        } else if (self.platforms.browser.weibo) {
          self.openUrl(self._URLS.downloadUrl, false, btn);
        } else {
          self.openUrl(self._URLS.AndroidUrl, true, btn);
        }
      } else {
        self.openUrl(self._URLS.downloadUrl, false, btn);
      }

    });
  },
  // “关闭”按钮
  setClose: function () {

    const self = this;

    document.querySelector(self.closeBtn).addEventListener(`click`, (event)=>{
      self.remove();
    });

  },
  // 打开操作
  openUrl: function (url, isCustomed, btn) {
    const self = this;
    if (isCustomed) {
      location.href = url;
      // 超时未调起App则跳转到下载链接（调起App后尚不知如何取消跳转）
      setTimeout(function () {
        window.location.href = self._URLS.downloadUrl;
        btn.classList.add(`j_open`);
      }, 1000);
    } else {
      window.location.href = url;
      btn.classList.add(`j_open`);
    }
  },
  // 获取平台类型
  getPlatform: function (obj) {
    return {
      os: {
        iphone: !!obj.os.iphone,
        android: !!obj.os.android
      },
      browser: {
        safari: !!(obj.browser.safari && !obj.browser.weixin && !obj.browser.ucbrowser && !obj.browser.qq && !obj.browser.weibo),
        qq: !!obj.browser.qq,
        ucbrowser: !!obj.browser.ucbrowser,
        qqbrowser: !!obj.browser.qqbrowser,
        weixin: !!obj.browser.weixin,
        weibo: !!obj.browser.weibo,
        opera: !!obj.browser.opera
      }
    };
  },
  remove: function () {
    const self = this;
    document.querySelector(`#J_appDownload`).parentNode.removeChild(document.getElementById(`J_appDownload`));
  }
};

new Download();