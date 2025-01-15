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


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}