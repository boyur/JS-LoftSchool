let array = [1, 2, 3, 4, 5, 6];

let forEach = function (arr, callbackFunc) {

  for (let i = 0; i < arr.length; i++) {

    let item = arr[i];

    callbackFunc(item, i, arr);
  }
};

let filter = function (arr, callbackFunc) {

  let result = [];

  for (let i = 0; i < arr.length; i++) {

    let item = arr[i];

    if(callbackFunc(item)) {
      result.push(item);
    }
  }

  return result;
};

let map = function (arr, callbackFunc) {

  let result = [];

  for (let i = 0; i < arr.length; i++) {

    let item = arr[i];
    result.push(callbackFunc(item));
  }

  return result;
};

let slice = function(arr, begin, end) {

  let b = 0;
  let newArr = [];

  if (end === undefined) {
    end = arr.length;
  };

  if (end > arr.length) {
    end = arr.length;
  };

  if (begin === undefined) {
    begin = 0;
  };

  if (begin < 0) {
    begin = arr.length + begin;
  };

  if (end < 0) {
    end = arr.length + end;
  };

  for (let i = begin; i < end; i++) {
    newArr[b] = arr[i];
    b++;
  };

  return newArr;
};

let reduce = function (arr, reduceFunc, initialValue, result, i) {

  if (initialValue === undefined) {
    if (i === undefined) {
      let i = 0;
      var result = arr[0];
      let currentValue = arr[i + 1];
      let previousValue = result;

      result = reduceFunc(previousValue, currentValue);

      i++;

      return reduce(arr, reduceFunc, initialValue, result, i);
    }
    if (i < arr.length - 1) {

      let previousValue = result;
      let currentValue = arr[i + 1];

      result = reduceFunc(previousValue, currentValue);

      i++;

      return reduce(arr, reduceFunc, initialValue, result, i);
    } else {
      return result;
    }

  } else {
    if (i === undefined) {
      var i = -1;
      var result = initialValue;
      let currentValue = arr[0];
      let previousValue = result;

      result = reduceFunc(previousValue, currentValue);

      i++;

      return reduce(arr, reduceFunc, initialValue, result, i);
    }

    if (i < arr.length - 1) {
      let previousValue = result;
      let currentValue = arr[i + 1];

      result = reduceFunc(previousValue, currentValue);

      i++;

      return reduce(arr, reduceFunc, initialValue, result, i);
    } else {
      return result;
    }
  }

};

forEach(array, item => console.log(item));

let greaterThan4 = filter(array, item => item > 4);
console.log(greaterThan4);

let sqare = map(array, item => item*item);
console.log(sqare);