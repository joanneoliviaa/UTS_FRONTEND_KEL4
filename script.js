document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;

    if (email) {
        alert(`Terima kasih telah berlangganan, ${email}!`);
    } else {
        alert("Silakan masukkan email yang valid.");
    }
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  slides.forEach(slide => slide.classList.remove('active'));
  
  dots.forEach(dot => dot.classList.remove('active-dot'));

  slides[slideIndex].classList.add('active');
  dots[slideIndex].classList.add('active-dot');
}

function moveSlide(step) {
  slideIndex += step;
  showSlide(slideIndex);
}

showSlide(slideIndex);

setInterval(() => {
  moveSlide(1);
}, 5000); 
