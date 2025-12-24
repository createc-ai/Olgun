// Dinamik Reklam Alanı Yapısı
const adArea = document.getElementById("adArea");

// Gelecekte tekli / ikili / üçlü / dörtlü dönüşüm için hazır
function setAdLayout(type) {
    adArea.className = "ad-area";

    if (type === 1) {
        adArea.style.gridTemplateColumns = "1fr";
    }
    if (type === 2) {
        adArea.style.gridTemplateColumns = "1fr 1fr";
    }
    if (type === 3) {
        adArea.style.gridTemplateColumns = "1fr 1fr 1fr";
    }
    if (type === 4) {
        adArea.style.gridTemplateColumns = "1fr 1fr";
    }
}

// Varsayılan: 4’lü
setAdLayout(4);

// Placeholder buton akışları
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("Buton aktif:", btn.innerText);
    });
});
