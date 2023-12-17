window.onscroll = function() {
  var scrollY = window.scrollY;
  var header = document.querySelector("header");
  header.style.transform = "translateY(" + scrollY / 2 + "px)";
};
document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector('button');
  const paragraph = document.createElement('p');
  paragraph.textContent = "n sei fazer isso D:.";
  
  button.addEventListener('click', function() {
      document.getElementById('home').appendChild(paragraph);
      button.style.display = 'none'; 
  });
});
document.addEventListener("DOMContentLoaded", function () {
  
  showContent("historia");

  
  function showContent(sectionId) {
      const sections = document.querySelectorAll(".content");
      sections.forEach((section) => {
        section.style.display = "none";
      });
  
      const selectedSection = document.getElementById(sectionId);
      selectedSection.style.display = "block";
    }
  
   
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const sectionId = link.getAttribute("href").substring(1);
        showContent(sectionId);
      });
    });
  });
  
const saibaMaisBtn = document.getElementById('saibaMaisBtn');
const infoAdicional = document.getElementById('infoAdicional');


saibaMaisBtn.addEventListener('click', function() {
    
    if (infoAdicional.style.display === 'none') {
        infoAdicional.style.display = 'block';
    } else {
        infoAdicional.style.display = 'none';
    }
});
