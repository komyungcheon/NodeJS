let students =  [
    {
        name: "Ha",
        gender: 'female',
        poin: 8
    },
    {
        name: "Huy",
        gender: 'male',
        poin: 9
    },
    {
        name: "Hung",
        gender: 'male',
        poin: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        poin: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        poin: 10
    },
    {
        name: "Long",
        gender: 'male',
        poin: 5
    },
    {
        name: "Luan",
        gender: 'male',
        poin: 10
    },
    {
        name: "Linh",
        gender: 'female',
        poin: 8
    }

];
// let totalBysex = students.reduce((accumulator,students)=>{
//     if(students.gender === 'nam'){
//         accumulator.gender += students.poin;
//     }else if(students.gender === 'nu'){
//         accumulator.gender +=students.poin;
//     }
// return accumulator;
// });

let maleList = students.filter((item)=>{
    if(item.gender === "male"){
        return item
    }
})
let famaleList = students.filter((item) =>{
    if(item.gender === "female"){
        return item;
    }
})
console.log(maleList);
console.log(famaleList);

let total = 0;
let total1 = 0
maleList.forEach(item => total += item.poin)
famaleList.forEach(item => total1 += item.poin)
console.log(total);

let diemTrungBinhNam = total/maleList.length
console.log(diemTrungBinhNam);
let diemTrungBinhNu = total1/famaleList.length
console.log(diemTrungBinhNu);
