function hitungLuas() {
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);
    var hasilluas = document.getElementById("hasilluas");
  
    if (!alas || !tinggi) {
      hasilluas.innerHTML = "Silakan masukkan nilai alas dan tinggi";
      return;
    }
  
    var luas = 0.5 * alas * tinggi;
    hasilluas.innerHTML = "Luas segitiga adalah: " + luas;
  }


  function hitungKeliling() {
    var sisiA = parseFloat(document.getElementById("sisiA").value);
    var sisiB = parseFloat(document.getElementById("sisiB").value);
    var sisiC = parseFloat(document.getElementById("sisiC").value);
    var hasilkeliling = document.getElementById("hasilkeliling");
  
    if (!sisiA || !sisiB || !sisiC) {
      hasilkeliling.innerHTML = "Silakan masukkan nilai semua sisi";
      return;
    }
  
    var keliling = sisiA + sisiB + sisiC;
    hasilkeliling.innerHTML = "Keliling segitiga adalah: " + keliling;
  }
  
