function consoleRec(arr, i) {
  if (!i) {
    i = 0;
  }

  console.log(arr[i]);

  if (arr[i]) {
    i++;
    return consoleRec(arr, i);
  }
}

consoleRec(['Я', 'Рекурсивно','вывожу','массив!']);