function changePossibilities(amount, denominations) {
  let AmountArr = new Array(amount + 1);
  AmountArr.fill(0);
  AmountArr[0] = 1;
  for (let i = 0; i < denominations.length; i++) {
    for (let j = 1; j < AmountArr.length; j++) {
      if (denominations[i] <= j) {
        AmountArr[j] += AmountArr[j - denominations[i]];
      }
    }
  }
  return AmountArr[amount];
}

// sample test case
changePossibilities(4, [1, 2, 3]);
