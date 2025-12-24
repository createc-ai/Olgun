// JS | Createc AI - Planlar Sayfası

const toggleButtons = document.querySelectorAll(".toggle-btn");
const prices = document.querySelectorAll(".price");

toggleButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    toggleButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const type = btn.dataset.type;

    prices.forEach(price => {
      const monthly = price.dataset.monthly;
      const yearly = price.dataset.yearly;

      if (type === "yearly") {
        price.innerText = yearly === "0" ? "Ücretsiz" : `${yearly} TL / yıl`;
      } else {
        price.innerText = monthly === "0" ? "Ücretsiz" : `${monthly} TL / ay`;
      }
    });
  });
});

// Placeholder ödeme / AI / 3D akışları
document.querySelectorAll(".plan-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Ödeme / AI / 3D akışı buradan devam edecek.");
  });
});
