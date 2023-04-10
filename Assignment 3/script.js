let insert = (num) => {
  let expression = document.getElementsByName("textview")[0].value;
  // let expression2 = document.getElementsByName("textview")[0].value;
  let str = expression.length-1 ;
  console.log(str)
  // let str2 = expression2.length;
  // console.log(str2)
  if (
    expression[str] !== "-" &&
    expression[str] !== "+" &&
    expression[str] !== "*" &&
    expression[str] !== "/" ||
    typeof num === "number"
  ) {
    document.getElementsByName("textview")[0].value += num;
  }
};
let equal = () => {
  let expression = document.getElementsByName("textview")[0].value;
  if (expression) {
    document.getElementsByName("textview")[0].value = eval(expression);
  }
};
