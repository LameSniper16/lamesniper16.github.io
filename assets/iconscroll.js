document.addEventListener("DOMContentLoaded", () => {
    triggerPosition();

    document.addEventListener("scroll", triggerPosition);
});

function triggerPosition() {
    const socialIcons = document.querySelector(".social");
    const background = document.querySelector(".background");
    const backgroundBottom = background.offsetTop + background.offsetHeight;

    if (window.scrollY + window.innerHeight > backgroundBottom) {
        socialIcons.style.position = "absolute";
        socialIcons.style.bottom = "28px";
        socialIcons.style.left = "50%";
        socialIcons.style.transform = "translateX(-50%)";
    } else {
        socialIcons.style.position = "fixed";
        socialIcons.style.bottom = "20px";
        socialIcons.style.left = "50%";
        socialIcons.style.transform = "translateX(-50%)";
    }
}
