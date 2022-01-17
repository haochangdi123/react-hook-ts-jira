// 在函数里面改变传入的对象是不好的

import { log } from "console";
import { useEffect, useState } from "react";

// 去掉属性为空的属性
export const clearObj = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    //@ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      //@ts-ignore
      delete result[key];
    }
  });
  return result;
};

// 值是否为0
const isFalsy = (value: unknown) => {
  return value === 0 ? false : !value;
};

/**
 *
 * @param {*} callback
 * 自定义的hook，当页面一加载就运行
 * 注意： 需要以'use'开头，这样才是一个hook，因为hook只能在组件或者hook中使用，如过没有以‘use’开头，那就是普通函数，
 * 就不能使用其他hook了
 */
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

//普通的截流函数
// const debounce = (func, delay) => {
//   let timer;
//   return (...parms) => {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(() => {
//       func(...parms);
//     }, delay);
//   };
// };

export const useDebounce = <T>(value: T, delay?: number): T => {
  const [newResult, setNewResult] = useState(value);
  useEffect(() => {
    console.log(11111, value);
    // 每次value,delay变化就会有一个定时器，赋值
    const timer = setTimeout(() => {
      setNewResult(value);
    }, delay);

    // return 会在页面销毁时触发；
    // 当value, delay发生变化，useEffect又一次执行时，return的会销毁上一次useEffect的timer
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return newResult;
};
