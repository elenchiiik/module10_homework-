let arr2 = ["дом", "карта", "банк", "машина"];

function hasTwins(array){
  return array.length !== new Set(array).size;
}