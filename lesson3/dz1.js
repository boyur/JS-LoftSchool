'use strict';

function isAllTrue(source, filterFn) {

  try {
    if (source.length == 0) {
      throw new Error ('Пустой массив!')
    }

    for (let i = 0; i < source.length; i++) {

      if (filterFn(source[i]) === false) {
        return false;
      }
    }

    return true;
  }

  catch (e) {
    console.error(e.message)
  }
}

function isNumber(val) {
  return typeof val === 'number';
}


console.log(isAllTrue([1,2,3], isNumber));