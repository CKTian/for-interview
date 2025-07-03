/**
 * 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
 * 看你是否关注的只是最后一次的结果
 * 例如 输入邮箱后的检测
 * 例如 窗口调整 计算大小
 * @param {*} func 
 * @param {*} delay 
 */
const debounce = (func, delay) => {
    let timer = null;
    return (...args)=>{
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }

};

// 使用示例
const log = () => {
  console.log("防抖函数被调用");
};

const debouncedLog = debounce(log, 1000);

// 短时间内多次调用
debouncedLog();
debouncedLog();
debouncedLog();