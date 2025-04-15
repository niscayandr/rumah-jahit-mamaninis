// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Pop-up modal studi kasus
const studiBanner = document.querySelector(".studi-banner img");
const modal = document.getElementById("modalStudiKasus");
const closeBtn = document.querySelector(".close-button");

studiBanner.addEventListener("click", function () {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Kirim data ke WhatsApp
document.getElementById("formWa").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const nohp = document.getElementById("nohp").value;
  const pesan = document.getElementById("pesan").value;

  const noWa = "6282164442463"; // Nomor WA Mama Ninis
  const teks =
    `Halo Mama Ninis!%0A` +
    `Saya *${nama}* ingin menjahit/konsultasi.%0A` +
    `📧 Email: ${email}%0A` +
    `📞 No HP: ${nohp}%0A` +
    `📝 Pesan: ${pesan}`;

  const waUrl = `https://wa.me/${noWa}?text=${encodeURIComponent(teks)}`;
  window.open(waUrl, "_blank");
});
