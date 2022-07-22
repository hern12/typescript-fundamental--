//enum
const small = 1;
const medium = 2;
const large = 3;

// ใช้ group ตัวแปรในกรณีที่คิดว่าอยู่ในหมวดเดียวกัน
// enum member สามาถใส่ค่าเริ่มต้นได้
// ถ้าใส่ const ข้างหน้า file ที่ compile เสร็จแล้วจะสั้นลงแต่ทำงานได้เหมือนกันและมีความเร็วมากกว่าแต่อาจจะมองไม่เห็นด้วยตา
const enum Size { 
    Small = 1,  // ถ้าไม่ใส่ค่าจะมีค่าเริ่มต้น = 0 และค่าที่ 2 จะเท่ากับ 1 ตามลำดับ
    Medium, 
    Large
}



let mySize: Size = Size.Medium