//any
let level; //ถ้าไม่กำหนด type หรือไม่ใส่ค่าเริ่มต้นจะกลายเป็น any type
function render(document: any = 1) {
  console.log(document);
}

render(1);
render('2');
