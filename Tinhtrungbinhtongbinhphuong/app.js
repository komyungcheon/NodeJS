let number = [1,2,3,4,5,6,7,8,9,10]
// let cacsochan = number.filter((item)=> item % 2 === 0)
// console.log(cacsochan);
// let sum = cacsochan.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum)

let total = number.reduce(function (total,currentValue) {
    if(currentValue % 2 === 0){
        return total + currentValue
    }
    else return total;
},0);
console.log(total)

let trungbinhtongbinhphuong = Math.pow(total,2)
console.log(trungbinhtongbinhphuong)

