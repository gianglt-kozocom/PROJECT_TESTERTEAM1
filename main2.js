<<<<<<< HEAD
//Giang update
=======

>>>>>>> origin/main
let arr = [3,5,7,9,5,6,8,1];

// 1. Tính tổng các phần tử trong mảng
function getSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
<<<<<<< HEAD
=======

// 2. Tìm số lớn nhất
>>>>>>> origin/main
function getMax(array) {
  return Math.max(...array);
}

// 3. Tìm số nhỏ nhất
function getMin(array) {
  return Math.min(...array);
}

// 4. Đếm xem có bao nhiêu số chẵn
function countEven(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

// 5. Tính giá trị trung bình
function getAverage(array) {
  return getSum(array) / array.length;
}

// 6. Tạo mảng mới chỉ chứa số lẻ
function getOddArray(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      result.push(array[i]);
    }
  }
  return result;

}

console.log("Mảng gốc:", arr);
console.log("Tổng:", getSum(arr));
console.log("Số lớn nhất:", getMax(arr));
console.log("Số nhỏ nhất:", getMin(arr));
console.log("Số chẵn:", countEven(arr));
console.log("Trung bình:", getAverage(arr));
console.log("Mảng số lẻ:", getOddArray(arr));