//bài 01:  Viết một chương trình JavaScript để nối tất cả các phần tử trong một mảng chuỗi lại với nhau. Ví dụ có mảng chuỗi như sau:
// let myColor = ["Lion", "Tiger", "Wolf", "Kangaroo"];
// console.log(myColor.join(','));


//Bài 02: Viết một chương trình nhận một số nhập vào và chèn dấu (_) giữa 2 số chẵn.

// let numberArray = prompt('Mời bạn nhập');

// let number = numberArray.split('');

// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 === 0 && number[i + 1] % 2 === 0) {
//         number[i] = number[i] + '_';
//     }
// }

// console.log(number.join(''));


//Bài 03: Viết một chương trình nhập vào một chuỗi và chuyển các ký tự chữ thường trong chuỗi vừa nhập sang thành dạng chữ hoa.


// let text = prompt('Mời nhập chuỗi');
// var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var LOWER = 'abcdefghijklmnopqrstuvwxyz';
// var result = [];

// for (var x = 0; x < text.length; x++) {
//     if (UPPER.indexOf(text[x]) !== -1) {
//         result.push(text[x].toLowerCase());
//     }
//     else if (LOWER.indexOf(text[x]) !== -1) {
//         result.push(text[x].toUpperCase());
//     }
//     else {
//         result.push(text[x]);
//     }
// }
// console.log(result.join(''));