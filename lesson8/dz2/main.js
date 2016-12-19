// Наша функция сравнения
function compareName(a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a должно быть равным b
  return 0;
}

let obj = {};
let req = new XMLHttpRequest();
req.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', true);
req.onload = function() {
  obj = JSON.parse(req.response);
  obj.sort(compareName);
  console.log(obj);
};
req.send();