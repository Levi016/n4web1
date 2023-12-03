window.onscroll = function() {
  var scrollY = window.scrollY;
  var header = document.querySelector("header");
  header.style.transform = "translateY(" + scrollY / 2 + "px)";
};
document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector('button');
  const paragraph = document.createElement('p');
  paragraph.textContent = "Urbanização é o processo de crescimento e desenvolvimento das áreas urbanas, envolvendo a migração da população do campo para a cidade, a construção de infraestrutura urbana, o surgimento de novos estilos de vida e a transformação do ambiente físico e social.";
  
  button.addEventListener('click', function() {
      document.getElementById('home').appendChild(paragraph);
      button.style.display = 'none'; // Esconde o botão após clicar
  });
});