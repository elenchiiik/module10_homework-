
function reverseString(str) {
  
    let arr;
    arr = str.split("");
  
    console.log(arr);
   
    arr.reverse();
    console.log(arr);
    
    let newStr;
    newStr = arr.join("")
    console.log(newStr);
    
    return str;
  }
  
  reverseString("Hello");
  /*упражнение 4*/
  let num = Math.ceil(Math.random()*100);
alert(num);

/*упражнение 5*/
let arr1 = ["Аня","Оля","Катя","Даша"];
console.log(arr.length);
["Аня","Оля","Катя","Даша"].forEach(alert);

/*упражнение 6*/
let arr2 = ["дом", "карта", "банк", "машина"];

function hasTwins(array){
  return array.length !== new Set(array).size;
}

/*упражнение 7*/
let arr = [8, 3, 0.6, null, 2, 0.8, 67,undefined, ];
let zerocount = 0;
let numbercount = 0;
let evencount = 0;
let oddcount = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i])) {
        numbercount += 1;
        if (arr[i] === 0) {
            zerocount += 1;
        } else if (arr[i] % 2 === 0) {
            evencount += 1;
        } else {
            oddcount += 1;
        }
    }
}
console.log(`В массиве: ${numbercount} цифр, ${zerocount} нулей, ${evencount} чётных, ${oddcount} нечётных!`);

/*упражнение 8*/ 

let animals = new Map([
    ["phone", "small"],
    ["ipad", "medium"],
    ["computer", "large"]
]);
animals.forEach((value, key) => {
    console.log(`${key} - x = ${value} - y`);
});

