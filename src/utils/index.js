// 自定义判断元素类型JS
const toType = function(obj) {
  return ({
  }).toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
}
// 参数过滤函数
const filterNull = function (o) {
  _.forEach(o, (value, key) => {
    if (value === null) {
      delete o[key];
    }
    if (toType(value) === 'string') {
      o[key] = value.trim();
    } else if (toType(value) === 'object') {
      o[key] = filterNull(value);
    } else if (toType(value) === 'array') {
      o[key] = filterNull(value);
    }
  });
  return o;
}

export default {
  toType, // 自定义判断元素类型JS
  filterNull, // 参数过滤函数
}

