function consoleRec(arr, counter) {
  if (counter == undefined) {
    counter = 0;
  }

  console.log(arr[counter]);

  if (counter < arr.length - 1) {
    counter++;
    return consoleRec(arr, counter);
  }
}

consoleRec(['Я', 'Рекурсивно','вывожу','массив!']);