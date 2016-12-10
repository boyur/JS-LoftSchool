function calculator(value) {
  return {
    sum: function sum() {
      let result = value;
      for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
      }

      return result;
    },
    dif: function dif() {
      let result = value;
      for (let i = 0; i < arguments.length; i++) {
        result -= arguments[i];
      }

      return result;
    },
    div: function dif() {
      let result = value;
      for (let i = 0; i < arguments.length; i++) {
        result /= arguments[i];
      }

      return result;
    },
    mul: function dif() {
      let result = value;
      for (let i = 0; i < arguments.length; i++) {
        result *= arguments[i];
      }

      return result;
    }
  };
}

let myCalculator = calculator(100);
console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(2, 2)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400