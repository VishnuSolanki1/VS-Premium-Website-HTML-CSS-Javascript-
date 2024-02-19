let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function showContent(element) {
  var content = element.querySelector('.content');
  content.style.display = "flex";
}

function hideContent(element) {
  var content = element.querySelector('.content');
  content.style.display = "none";
}

var originalHeight = document.querySelector('.faq').clientHeight;

function toggleAnswer(element) {
  var answer = element.querySelector('.answer');
  var faqSection = document.querySelector('.faq');
  var openAnswers = document.querySelectorAll('.faqbox.open .answer');
  var totalAnswerHeight = 0;

  // Toggle the 'open' class
  element.classList.toggle('open');

  // Calculate the total height of open answer paragraphs
  openAnswers.forEach(function (openAnswer) {
    totalAnswerHeight += openAnswer.clientHeight;
  });

  // Check if the answer is open
  if (element.classList.contains('open')) {
    // Show the answer
    answer.style.display = 'block';
    // Get the height of the answer
    var answerHeight = answer.clientHeight;
    // Increase the height of the .faq section
    faqSection.style.height = Math.max(originalHeight, faqSection.clientHeight + answerHeight) + 'px';
  } else {
    // Hide the answer
    answer.style.display = 'none';
    // Decrease the height of the .faq section
    faqSection.style.height = Math.max(originalHeight, faqSection.clientHeight - totalAnswerHeight) + 'px';
  }
}

