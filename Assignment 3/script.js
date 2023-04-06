function calculation() {
  let fNum = document.getElementsByName("num1")[0].value;
  let SNum = document.getElementsByName("num2")[0].value;
 let Operator= document.getElementById("+").innerHTML
 console.log(Operator)
  let result;
  switch (Operator) {
    case "+":
      result = parseInt(fNum) + parseInt(SNum);
      break;

    case "-":
      result = parseInt(fNum) - parseInt(SNum);
      break;

    case "/":
      result = parseInt(fNum) / parseInt(SNum);
      break;

    case "*":
      result = parseInt(fNum) * parseInt(SNum);
      break;

    default:
      alert("This Symbol is Not Existed");
      break;
  }
  let Total = document.getElementById("total");
  let element = document.getElementById("heading");
  element.style.visibility = "visible";
  Total.innerHTML = result;
}
