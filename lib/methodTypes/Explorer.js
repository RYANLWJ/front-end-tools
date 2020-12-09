/**
 * 方法：获取移动终端浏览器版本信息
 */
const deviceVersions = () => {
  var u = navigator.userAgent,
    app = navigator.appVersion;
  return {
    trident: u.indexOf("Trident") > -1, //IE内核
    presto: u.indexOf("Presto") > -1, //opera内核
    webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
    gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动设备
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf("Android") > -1, //判断是否为android
    iPhone: u.indexOf("iPhone") > -1, //判断是否为iPhone
    iPad: u.indexOf("iPad") > -1, //是否iPad
    Safari: u.indexOf("Safari") == -1, //Safari
    weixin: u.toLowerCase().indexOf("micromessenger") > -1, //weixin
  };
};

module.exports = { deviceVersions };
