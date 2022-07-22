let employee = {
    id: 1
}
//ใน javascript เราสามารถใส่ field เพิ่มเข้าไปใน employee ได้แต่ถ้าเป็นใน typescript จะแดง
employee.name = 'Hern'

//เราสามารถกำหนดชนิดของ object ได้ว่ามี field อะไรบ้างอยู่ข้างใน
let employee1: {
    id: number;
    name: string;
} = {
    id: 1,
    name: 'Hern'
}
employee1.name = 'Hernn' 

//ถ้าอยากให้อ่านง่ายขึ้นเราสามาถยุบตัว data type ได้โดยการสร้าง interface หรือ type
interface Employee {
    id: number;
    name: string;
    middleName?: string;  //สามารถเป็น optional ได้ name?: string
}

let employee2: Employee = {
    id: 1,
    name: 'Hern'
}


//กำหนด readonly field ในกรณีที่ไม่อยากให้แก้
interface EmployeeV1 {
    readonly id: number;
    name: string;
    middleName?: string; 
}

let employee3: EmployeeV1 = {
    id: 123123123,
    name: '',
    middleName: ''
}

//เราสามารถใส่ function เข้าไปเป็น field ได้ใน object
interface EmployeeV2 {
    readonly id: number;
    name: string;
    retireFunction: (date: Date) => void
}

let employee4: EmployeeV2 = {
    id: 0,
    name: "",
    retireFunction: (date: Date): void => {
        console.log(date);
    }
}
employee4.retireFunction(new Date())