document.addEventListener("scroll", () => {
    const socialIcons = document.querySelector(".social");
    const background = document.querySelector(".background");
    const backgroundBottom = background.offsetTop + background.offsetHeight;

    if (window.scrollY + window.innerHeight > backgroundBottom) {
        // If scrolled past the background's bottom
        socialIcons.style.position = "absolute";
        socialIcons.style.bottom = "0";
        socialIcons.style.left = "50%";
        socialIcons.style.transform = "translateX(-50%)";
    } else {
        // While still within the background
        socialIcons.style.position = "fixed";
        socialIcons.style.bottom = "20px";
        socialIcons.style.left = "50%";
        socialIcons.style.transform = "translateX(-50%)";
    }
});
