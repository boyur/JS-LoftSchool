function timer(ms) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(ms);
    }, ms)
  })
}

timer(1000).then((ms) => {
  console.log("Таймер на " + ms / 1000 + "c");
});