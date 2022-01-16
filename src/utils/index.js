// 在函数里面改变传入的对象是不好的
// 去掉属性为空的属性
export const clearObj = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

// 值是否为0
const isFalsy = (value) => {
  return value === 0 ? false : !value;
};
