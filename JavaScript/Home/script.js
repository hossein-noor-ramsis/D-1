const navBtn = document.getElementById("bi-list");
const navbar = document.getElementById("bi-x-lg");
const navClose = document.getElementById("close");

navBtn.addEventListener("click", () => {
    navbar.classList.add("show");
});

navClose.addEventListener("click", () => {
    navbar.classList.remove("show");
});