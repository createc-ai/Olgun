// Placeholder – AI / 3D / Ödeme akışları bağlanacak

document.querySelectorAll(".tool").forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("Araç tıklandı:", btn.innerText);
    });
});

document.querySelector(".send").addEventListener("click", () => {
    console.log("Komut gönderildi");
});
