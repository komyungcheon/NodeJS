const CheckBienSoXeHaNoi = (item) => {
    const array = ['29', '30', '31', '32', '33', '40']
    for(const value of array){
        if(item.startsWith(value)){
            return true;
        }
    }
    return false;
}
const CacBienCheckBienSo =  ["29P1-124123", "30L9-63568", "17B3-29013", "33H2-21231"];
const BienSoXeHaNoi = [];
for (const value of CacBienCheckBienSo){
    if(CheckBienSoXeHaNoi(value)){
        BienSoXeHaNoi.push(value);
    }
}
console.log("Các biển số thuộc Hà Nội: ", BienSoXeHaNoi);