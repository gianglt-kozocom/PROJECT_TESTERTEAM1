const validUser = {
  username: "Giang_Pam",
  password: "Test123@"
}

function validateLogin(username, password){
  if (!username && !password){
    return {
      success: false,
      message: "Username và Password không được để trống" 
    }
  }
  if (!username){
    return {
      success: false,
      message: "User name là trường bắt buộc" 
    }
  }
  if (!password){
    return {
      success: false,
      message: "Password là trường bắt buộc" 
    }
  }
  if (password.length < 6){
    return {
      success: false,
      message: "Password phải có ít nhất 6 kí tự" 
    }
  }
  if (password.length > 8){
    return {
      success: false,
      message: "Password không vượt quá 8 kí tự" 
    }
  }
  if (username.length > 20){
    return {
      success: false,
      message: "User_name không vượt quá 20 kí tự" 
    }
  }
  return null

}

function login (username, password){
  const validation = validateLogin(username, password);
  if (validation) return validation;
  if (username === validUser.username && password !== validUser.password){
    return {
      success: false,
      message: "Password không hợp lệ" 
    }
  }
  if (username !== validUser.username ){
    return {
      success: false,
      message: "Account không tồn tại"
    }
  }
  return {
    success: true,
    message: "Login thành công" 
  }
}

function showMessage(msg, success) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = msg;
  messageDiv.className = success ? "success" : "error";
}

function clearForm() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  const msg = document.getElementById("message");
  msg.textContent = "";
  msg.className = "";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runAllTests(testCases) {
  for (const [index, tc] of testCases.entries()) {
    // auto-fill form
    document.getElementById("username").value = tc.username;
    document.getElementById("password").value = tc.password;

    // gọi login
    const result = login(tc.username, tc.password);

    // show message
    showMessage(result.message, result.success);

    // log kết quả
    const pass = result.success === tc.expected && result.message === tc.expectedMessage;
    console.log(`TC${index + 1}: ${pass ? "✅ PASS" : "❌ FAIL"} | actual=${result.message}`);

    // chờ 0.8s để nhìn message, sau đó xóa form
    await sleep(800);
    clearForm();
  }

  alert("Đã chạy xong tất cả TC (xem console)");
}



document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();
  const result = login(u, p);
  showMessage(result.message, result.success);
});

document.getElementById("clearFormBtn").addEventListener("click", clearForm);

document.getElementById("runTestsBtn").addEventListener("click", function () {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const testCases = data.loginUsers; // lấy mảng loginUsers trong file JSON
      runAllTests(testCases);            // gọi hàm runAllTests
    })
    .catch(err => console.error("Không load được data.json:", err));
});
