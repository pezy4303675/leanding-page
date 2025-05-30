
let slideIndex = 0;

function showSlides() {
    let slidesWrapper = document.querySelector(".slides-wrapper");
    let totalSlides = document.querySelectorAll(".mySlides").length;

    slideIndex = (slideIndex + 1) % totalSlides;

   
    slidesWrapper.style.transform = `translateX(${-slideIndex * 100}%)`;

    setTimeout(showSlides, 3000);
}

function currentSlide(n) {
    clearTimeout(slideInterval)
    slideIndex = n - 1;
    showSlides();
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides();
});

document.querySelectorAll('.link').forEach(link => {
  link.addEventListener('click', function() {
    
    document.querySelectorAll('.link').forEach(l => l.classList.remove('clicked'));
    

    this.classList.add('clicked');
  });
});

var modal = document.getElementsByClassName("modal")[0];

function closeModal() {
  modal.style.display = "none"; 
}

function openModal() {
  modal.style.display = "flex"; 
}

var modal2 = document.getElementById("modal2"); 

function closeModal2() {
  modal2.style.display = "none"; 
}

function openModal2() {
  modal2.style.display = "flex"; 
}


var modal3 = document.getElementById("modal3");

function closeModal3() {
  modal3.style.display = "none"; 
}

function openModal3() {
  modal3.style.display = "flex"; 
}
