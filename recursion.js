function factorial(number, start = 1) {

  if (start == number) {
    return number;
  } else {
    return start * factorial(number, start + 1);
  }
}
