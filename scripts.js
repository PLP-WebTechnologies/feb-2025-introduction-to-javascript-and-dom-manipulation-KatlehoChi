function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

function bloomSunflower() {
    let flower = document.getElementById("sunflower");
    flower.style.opacity = "1";
    flower.style.transform = "scale(1)";
}

function growSunflower() {
    let flower = document.getElementById("sunflower");
    flower.style.transform = "scale(1.5)";
}
