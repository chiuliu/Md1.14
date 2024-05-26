// Bài 01: Đảo ngược các phần tử trong mảng
// let arr = [-3, 5, 1, 3, 2, 10];

// let first = 0;
// let last = arr.length - 1;

// while (first < last) {
//     let temp = arr[first];
//     arr[first] = arr[last];
//     arr[last] = temp;
//     first++;
//     last--;
// }

// console.log(arr);

// Bài 02: Tìm giá trị trong mảng


// let valueArr = +prompt("Mời nhập phần tử bất kỳ:");

// let numbers = [-3, 5, 1, 3, 2, 10];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] == valueArr) {
//         console.log("Giá trị " + valueArr + " xuất hiện ở vị trí thứ " + (i + 1));
//         break;
//     } else {
//         console.log("Giá trị " + valueArr + " không xuất hiện trong mảng");
//         break;
//     }
// }


// let index = -1;
// for (let i = 0; i < numbers.length - 1; i++) {
//     if (numbers[i] = valueArr) {
//         index = i;
//         break;
//     }
// }

// if (index == -1) {
//     console.log("Không tìm thấy giá trị " + valueArr + " trong mảng");
// }

// else {
//     console.log("Giá trị " + valueArr + " xuất hiện ở vị trí thứ " + (index + 1));
// }


//Bài 03: LUYỆN TẬP VÀ THAO TÁC MẢNG

// let pushArr = [];

// for (let i = 0; i < 5; i++) {
//     pushArr.push(i);
// }

// console.log("Sử dụng phương thức push() để thêm phần tử đó vào mảng array ban đầu", pushArr);

//TÌM GIÁ TRỊ TRONG MẢNG

// let array = [1, 2, 3, 4, 5, 6];
// let n = prompt("Nhập vào số bất kì");

// let check = false;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] == n) {
//         check = true;
//     }
// }

// if (check == true) {
//     alert('Bingo');
// }

// else {
//     alert('Chúc bạn may mắn lần sau');
// }

//Bài 04: ĐẢO NGƯỢC CÁC PHẦN TỬ TRONG MẢNG

// VD: 1,3,5,12,65,98
// let numberArr = prompt("Nhập vào đây số bất kỳ được ngăn cách bởi dấu ,");
// let convert = numberArr.split(",");
// console.log("Chuyển đổi string sang array", convert); // convert=[1,3,5,12,65,98]

// let Arrs = [];
// for (i = convert.length - 1; i >= 0; i--) {
//     Arrs.push(convert[i]);
//     console.log("Đảo ngược các phần tử", Arrs); // array =[98,65,12,5,3,1]
// }

//Bài 05: TÌM PHẦN TỬ LỚN NHẤT TRONG MẢNG
// VD: -89,57,-20,36,24,75
// let a = prompt("Nhập vào đấy số bất kỳ ngắn cách bởi dấu ,");
// let convert = a.split(",");
// console.log("Chuyển đổi string sang array", convert); // convert=[-89,57,-20,36,24,75]

// let max = convert[0];
// for (let i = 0; i < convert.length; i++) {
//     if (max < convert[i]) {
//         max = convert[i]
//     }
// }
// console.log(max);

