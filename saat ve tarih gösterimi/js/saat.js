let kullaniciAdi = prompt("lütfen adinizi giriniz:");
let myName = document.querySelector("#myName");

if (kullaniciAdi.length <= 0) {
  alert("boş birakilamaz");
  location.reload(); //sayfa yenileme işlevi
} else {
  myName.innerHTML = `${kullaniciAdi}`;
}
function time() {
  var days = [
    "Pazar",
    "Pazartesi",
    "Sali",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let date = new Date();

  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let day = date.getDay();
  document.getElementById("myClock").innerHTML =
    hour + ":" + min + ":" + sec + "-" + days[day];
}
setInterval(time, 1000);
