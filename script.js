document.addEventListener("DOMContentLoaded", () => {

const cover = document.getElementById("cover");
const content = document.getElementById("content");
const music = document.getElementById("music");

const openInviteBtn = document.getElementById("openInvite");
const loveBtn = document.getElementById("loveBtn");

const modal = document.getElementById("modal");
const countdown = document.getElementById("countdown");

const nameInput = document.getElementById("guestName");
const wishInput = document.getElementById("guestWish");
const sendWishBtn = document.getElementById("sendWish");
const wishList = document.getElementById("wishList");

/* OPEN INVITE */
openInviteBtn.addEventListener("click", () => {
    cover.style.display = "none";
    content.classList.remove("hidden");
    music.play().catch(()=>{});
});

/* LOVE BUTTON */
loveBtn.addEventListener("click", () => {
    modal.innerHTML = `
    <div class="modal-box">
        <p>"Cinta adalah perjalanan dua jiwa yang saling menemukan rumah."</p>
        <button class="btn-gold" id="closeModalBtn">Tutup</button>
    </div>`;
    modal.classList.remove("hidden");

    document.getElementById("closeModalBtn").onclick = () => {
        modal.classList.add("hidden");
    };
});

/* IMAGE POPUP */
document.querySelectorAll(".img-popup").forEach(img => {
    img.addEventListener("click", () => {
        modal.innerHTML = `<img src="${img.src}">`;
        modal.classList.remove("hidden");
    });
});

/* CLOSE MODAL CLICK OUTSIDE */
modal.addEventListener("click", e => {
    if(e.target === modal) modal.classList.add("hidden");
});

function openModal(html){
    modal.innerHTML = html;
    modal.classList.remove("hidden");
}
function closeModal(){
    modal.classList.add("hidden");
}


/* COUNTDOWN */
const eventDate = new Date("2025-01-20T09:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const d = eventDate - now;
    if(d <= 0){
        countdown.innerHTML = "Hari ini 💍";
        return;
    }
    countdown.innerHTML =
    `${Math.floor(d/(1000*60*60*24))} hari ` +
    `${Math.floor((d%(1000*60*60*24))/(1000*60*60))} jam ` +
    `${Math.floor((d%(1000*60*60))/(1000*60))} menit`;
}, 1000);

/* WISHES */
sendWishBtn.addEventListener("click", () => {
    if(!nameInput.value || !wishInput.value) return;
    const data = JSON.parse(localStorage.getItem("wishes") || "[]");
    data.push({name: nameInput.value, text: wishInput.value});
    localStorage.setItem("wishes", JSON.stringify(data));
    nameInput.value = "";
    wishInput.value = "";
    loadWish();
});

function loadWish(){
    const data = JSON.parse(localStorage.getItem("wishes") || "[]");
    wishList.innerHTML = data.map(w =>
        `<div><b>${w.name}</b><br>${w.text}</div>`
    ).join("");
}
loadWish();

});

// ================== SNOW EFFECT ==================
const snowContainer = document.createElement("div");
snowContainer.className = "snow";
document.body.appendChild(snowContainer);

for(let i = 0; i < 60; i++){
    const snow = document.createElement("span");
    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = 5 + Math.random() * 10 + "s";
    snow.style.animationDelay = Math.random() * 5 + "s";
    snowContainer.appendChild(snow);
}

