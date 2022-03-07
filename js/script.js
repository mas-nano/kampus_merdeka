var frm = document.getElementById("formulir");
function kosong(x) {
  x.value = "";
}
function kosongAll() {
  frm.a1.value = "Masukkan Angka Pertama";
  frm.a2.value = "Masukkan Angka Kedua";
  frm.hasil.value = "";
}
function hitung(y) {
  let angka1 = frm.a1.value;
  let angka2 = frm.a2.value;
  let operator = y.value;

  if (isNaN(angka1) || angka1 == "" || isNaN(angka2) || angka2 == "") {
    alert("Harap isi data berupa angka");
  } else {
    switch (operator) {
      case "+":
        frm.hasil.value = parseInt(angka1) + parseInt(angka2);
        break;
      case "-":
        frm.hasil.value = parseInt(angka1) - parseInt(angka2);
        break;
      case "X":
        frm.hasil.value = parseInt(angka1) * parseInt(angka2);
        break;
      case "/":
        frm.hasil.value = parseInt(angka1) / parseInt(angka2);
        break;
      case "^":
        frm.hasil.value = Math.pow(parseInt(angka1), parseInt(angka2));
        break;
    }
  }
}
