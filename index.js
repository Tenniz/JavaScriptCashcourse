// การแรกาศตัวแปร
const myName = 'Artiatya';
let height = 161;
let isfeMale = true;
let city = null;
let bigNumber = 10n;

console.log(myName, height, isfeMale, city, bigNumber);

const person = {
    name: 'Artitaya',
    height: 161,
    city: 'Nakornsritammarat'
};

console.log(person.city);

// การเปลี่ยนแปลงข้อมูล
person.height = 160;

console.log(person);

// การเพิ่มข้อมูล
person.weight = 90;

console.log(person);

// ชุดข้อมูล
const numbers = [5, 10, 15, 20];

console.log(numbers);

console.log(numbers[2]);

// เพิ่ใข้อมูลลงในชุดข้อมูล
numbers.push(25);

console.log(numbers);

// ลบข้อมูลตัวสุดท้าย
numbers.pop();

console.log(numbers);

// เพิ่มข้อมูลไว้หน้าสุด
numbers.unshift(1);

console.log(numbers);

// ลบค้าข้อมูลตัวหน้าสุด
numbers.shift();

console.log(numbers);

let result = (10 + 5) * 2 / 2;
console.log(result);

const age = 24;

// เงื่อนไข

let password = '';

if (password === '') {
    console.log('password is required')
} else if (password.length >= 8 && password.length <= 12) {
    console.log('Password is valid');
} else {
    console.log('Password is invalid');
}

// function (calculateVat ชื่อที่เราตั้ง) (paramiter)

function calculateVat(money, vat) {
    return money * vat / 100; //รับค่าfuntion(paramiter)
}

calculateVat(100, 7)

const totalVat = calculateVat(100, 7); //ตัวแปรรับค่าผลลัพธ์
console.log(totalVat); //ตัวแปรรับค่า

// สามารถใช้ซ้ำได้
const totalVat10 = calculateVat(100, 10);
console.log(totalVat10);

// loop การวนซ้ำ (ประกาศตัวแปร ทำครั้งเดียว,เงื่อนไข,ตัวเปลี่ยนแปลงค่า)
for (let counter = 0; counter < 10; counter++) {  //วนรอบที่2 เงื่อนไข ->บอดี้ ส่วนในปีกกา ->เพิ่มค่าต้วสุดท้ายของพารามิเตอร์ -> แสดงผล 
    if (counter % 2 !== 0) { //เพิ่มเงื่อนไขให้แสดงเฉพาะเลขคู่ 
        console.log(counter); //แสดงผลตัวเลข 0-9 ถ้าเอา if ออก

    }
}

// loop การใช้ break
for (let counter = 0; counter < 10; counter++) {
    if (counter === 5) {
        break;
    }
    console.log(counter);  //ทำซ้ำจนเจอเงื่อนไข ถ้าเท่ากับ5 หยุดการคำนวนได้ผลลัพธ์ -4
}

// Dom [Document Object Model] 

