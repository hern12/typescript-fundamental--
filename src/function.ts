
//javascript by default function will return undefined

//noUnusedParameters
function calculateTax(income: number): number {
    return 0;
}

//noImplicitReturns
function calculateTaxV1(income: number) {
    if (income < 500){
        return income * 1.2
    }
    // return 1 ถ้าไม่มี default return มันจะแดงต้องมี default return ด้วย
}

function calculateTaxV2(income: number): number {
    if (income < 500){
        return income * 1.2
    }
    return 1 
}

//noUnusedLocals
function calculateTaxV3(income: number): number {
    let x;
    if (income < 500){
        return income * 1.2
    }
    return 1 
}


function calculateTaxV4(income: number, taxYear: number): number {
    if (taxYear < 2022){
        return income * 1.2
    }
    return income * 1.3 
}

calculateTaxV4(10000, 2022, 1) //แดงถ้าใส่ paramenter เกิน
calculateTaxV4(10000, "2022") //แดงถ้าใส่ paramenter ไม่ตรง type
calculateTaxV4(10000) //แดงถ้าใส่ paramenter ไม่ครบ

function calculateTaxV5(income: number, taxYear?: number): number {
    if (taxYear < 2022){ //ถ้าเป็น optional แล้วมันจะมีค่าได้ 2 อย่างคือ type ที่เรากำหนดหรือ undefined ทำให้โคดตรงนี้แดง วิธีแก้อยู่ท่ 49 หรือกำหนดค่า default ให้มันตรง paramenter 
        return income * 1.2
    }
    if ((taxYear || 2022) < 2022){ 
        return income * 1.2
    }
    return income * 1.3 
}

calculateTaxV5(10000) //ถ้าอยากใส่ไม่ครบแล้วไม่แดงให้ใส่ ? ไว้หลัง paramenter ตัวนั้น ? เรียกว่า optional ดูบรรทัด 45 และ optional ต้องอยู่ข้างหลังเท่านั้น

function doSomthing(): void {}