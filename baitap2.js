function nhapDiem(mon) {
  let diem = parseFloat(prompt(`Nhập điểm ${mon}:`));
  if (isNaN(diem) || diem < 0 || diem > 10) {
    alert(`${mon} invalid!`);
    return null;
  }
  return diem;
}
let toan = nhapDiem("Toán");
let ly = nhapDiem("Lý");
let hoa = nhapDiem("Hóa");
let diemTB = (toan + ly + hoa)/3;
console.log(`Tong diem 3 mon la: ${diemTB}`);
if(diemTB >= 8){
    console.log("Giỏi");
} else if(diemTB >=6.5)
{
    console.log("Khá");
}else if(diemTB >=5)
{
    console.log("TB");
 }else {
console.log("Yếu")
}
