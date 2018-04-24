const plusNum = function() {
  let plusNum = 0;

  for(let i = 0, l = arguments.length; i < l; i++) {
    if(Array.isArray(arguments[i])) {
      plusNum += ArrayPlusNum(arguments[i])
    } else {
      plusNum += arguments[i] * 1
    }
  }

  return plusNum
}

const ArrayPlusNum = function(numbers) {
  let plusNum = 0;

  for(let i = 0, l = numbers.length; i < l; i++) {
    plusNum += numbers[i] * 1
  }

  return plusNum
}

module.exports = {
  plusNum,
  ArrayPlusNum
}