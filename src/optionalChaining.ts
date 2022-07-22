type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : {birthday: new Date()}
}


let customer = getCustomer(0);
console.log(customer.birthday); //มีโอกาสแดงเพราะว่า function getCustomer มัน return ได้ 2 ค่าคือ Customer หรือ null
//optional property access operator '?'
console.log(customer?.birthday);  // ถ้าอยากให้ผ่านเราสามารถเติม ? ไว้หลัง customer ได้ ดังนั้นค่าที่ console.log มาจะมีโอกาสได้ค่าหรือได้ null ก็ได้


// Optional element acceess operator
// customers?.[0]

// Optional call
let log: null | (() => void) = null
log?.('a')