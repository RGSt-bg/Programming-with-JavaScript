function calorieObject(inputArr) {

    let calObj = {};

    for (let i = 0; i < inputArr.length; i += 2) {

        calObj[inputArr[i]] = Number(inputArr[i + 1]);
    }

    console.log(calObj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
console.log("-----------------------------------------------");
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);