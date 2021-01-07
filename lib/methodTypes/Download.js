/**
 *
 * @description 文件流方式下载文件
 * @param {string} url
 * @param {string} type  "iframe" | "a"
 */
const downloadFile = (url, type) => {
  if (!type || type === "iframe") {
    // 创建iframe
    const iframe = document.createElement("iframe");
    iframe.style.display = "none"; // 防止影响页面
    iframe.style.height = 0; // 防止影响页面
    iframe.src = url;
    document.body.appendChild(iframe); // 这一行必须，iframe挂在到dom树上才会发请求
    setTimeout(() => {
      iframe.remove();
    }, 5 * 60 * 1000);
  } else if (type === "a") {
    // 创建a 标签
    const a = document.createElement("a"); // 创建a标签
    const e = document.createEvent("MouseEvents"); // 创建鼠标事件对象
    e.initEvent("click", false, false); // 初始化事件对象
    a.href = url; // 设置下载地址
    a.download = ""; // 设置下载文件名
    a.dispatchEvent(e);
  }
};

module.exports = {
  downloadFile,
};
