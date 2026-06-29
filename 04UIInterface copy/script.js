const loginBtn = document.querySelector("#loginBtn");
const overlay = document.querySelector("#login-overlay");

loginBtn.addEventListener("click", () => {
    overlay.style.display = "flex";
});

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.style.display = "none";
    }
});
