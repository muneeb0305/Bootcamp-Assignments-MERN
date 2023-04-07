let insert = (num) => {
  document.getElementsByName("textview")[0].value =
    document.getElementsByName("textview")[0].value + num;
};
let equal = () => {
  let expression = document.getElementsByName("textview")[0].value;
  if (expression) {
    document.getElementsByName("textview")[0].value = eval(expression);
  }
};
