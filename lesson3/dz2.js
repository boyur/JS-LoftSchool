'use strict';

function isSomeTrue(source, filterFn) {

  try {
    if (source.length == 0) {
      throw new Error ('Пустой массив!')
    }

    for (let i = 0; i < source.length; i++) {

      if (filterFn(source[i]) === true) {
        return true;
      }
    }
    return false;
  }

  catch (e) {
    console.error(e.message)
  }
}

function isNumber(val) {
  return typeof val === 'number';
}


console.log(isSomeTrue(['это', 'массив', 1, 'чисел'], isNumber));