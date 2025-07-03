/**
 * 节流函数 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
 * 每次触发事件时都判断当前是否有等待执行的延时函数
 * 看你是不是 关注过程 但需要限制频率
 * 例如 疯狂点击
 * 例如 搜索框的联想
 * 例如 滚动加载
 * @param {*} fn
 * @param {*} delay
 */
function throttle(fn,delay) {
  let canRun = true; // 通过闭包保存一个标记
  return function (args) {
    if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
    canRun = false; // 立即设置为false
    fn.apply(this, args) // 将方法放在外面, 这样即便该函数是异步的，也可以保证在下一句之前执行
    setTimeout(function () {canRun = true}, delay)
  };
};

// 使用示例
const log = () => {
  console.log("节流函数被调用");
};

const throttledLog = throttle(log, 1000);

// 短时间内多次调用
throttledLog();
throttledLog();
throttledLog();