let animals = new Map([
    ["phone", "small"],
    ["ipad", "medium"],
    ["computer", "large"]
]);
animals.forEach((value, key) => {
    console.log(`${key} - x = ${value} - y`);
});
