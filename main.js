
// task1
function getSevenCol(arr1) {
    return arr1.join('').split('7').length -1;
}
var arr1 = [17,8,9,18,777]
console.log(getSevenCol(arr1));

//task2

const arrToStr = array => array.reduce((result, item, index, array) => {
    var num = Math.floor(index / 2);
    var lengthArr = array.length - 1;
    var Even = index % 2 === 0;
    var word = array[Even ? num: lengthArr - num];

    return result + word;
}, '');


console.log(arrToStr(['a', 'b', 'c', 'd', 'e', 'f']));
