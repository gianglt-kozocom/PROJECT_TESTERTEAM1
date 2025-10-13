// Máy chọn số ngẫu nhiên từ 1 đến 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
let guess = null;
let attempts = 0;

alert("Chào bạn! Hãy đoán số từ 1 đến 100.");

// Vòng lặp đoán số
while (guess !== secretNumber) {
  let input = prompt("Nhập số bạn đoán:");

  // Validate input
  if (input === null) { // người dùng nhấn Cancel
    alert("Bạn đã thoát trò chơi!");
    break;
  }

  guess = Number(input);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Vui lòng nhập số hợp lệ từ 1 đến 100!");
    continue;
  }

  attempts++;

  if (guess < secretNumber) {
    alert("Số bạn đoán nhỏ hơn, hãy thử lại!");
  } else if (guess > secretNumber) {
    alert("Số bạn đoán lớn hơn, hãy thử lại!");
  } else {
    alert(`Chúc mừng! Bạn đã đoán đúng số ${secretNumber} sau ${attempts} lần đoán!`);
    break;
  }
}