let value = prompt("Введите значение:");
let number = +value;
if (isNaN(number)) {
  console.log("Упс, кажется, вы ошиблись");
} else {
  if (number % 2 === 0) {
    console.log("Четное число");
  } else {
    console.log("Нечетное число");
  }
}
