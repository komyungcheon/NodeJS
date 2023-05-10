// let array = [2, 5, 6, 456, 2, 76, 1000, 123, 888]
// let max = array[0];
// for (const value of array) {
//     if (value > max) {
//         max = value;
//     }
// }
// console.log(`Gia tri lon nhat mang la ${max}`);
let array = [2, 5, 6, 456, 2, 76, 1000, 123, 888];
let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

console.log(`Gia tri lon nhat mang la ${max}`);


