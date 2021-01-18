function stopAtThree(arr) {
  arr.forEach((num) => {
    if (num === 3) {
      return;
    }
    console.log(num);
  });
}

stopAtThree([0, 1, 2, 3, 4, 5]);
