
var objA = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop4: {
    subProp1: 'sub value1',
    subProp2: {
      subSubProp1: 'sub sub value1',
      subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
    }
  },
  prop5: 1000,
  prop6: new Date(2016, 2, 10)
};

var objB = {
  prop5: 1000,
  prop3: 'value3',
  prop1: 'value1',
  prop2: 'value2',
  prop6: new Date('2016/03/10'),
  prop4: {
    subProp2: {
      subSubProp1: 'sub sub value1',
      subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
    },
    subProp1: 'sub value1'
  }
};

function deepEqual(obj1, obj2) {
  var objectEqual = true;
  var keys1 = Object.keys(obj1);
  var keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    objectEqual = false;
  }

  for (var prop in obj1) {

    if (obj1[prop].getTime) {
      var dateObj1 = (obj1[prop].valueOf());
      var dateObj2 = (obj2[prop].valueOf());

      if (dateObj1 !== dateObj2) {
        objectEqual = false;
      }
    }

    if (typeof obj1[prop] === 'string' || typeof obj1[prop] === 'number') {
      if (obj1[prop] !== obj2[prop]) {
        objectEqual = false;
      }
    }

    if (typeof obj1[prop] === 'object' || typeof obj1[prop] === 'array') {
      if (!deepEqual(obj1[prop], obj2[prop])) {
        objectEqual = false;
      }
    }
  }
  return objectEqual;
}

console.log(deepEqual(objA, objB));