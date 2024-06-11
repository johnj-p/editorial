window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector('.volver-arriba').style.display = "block";
  } else {
    document.querySelector('.volver-arriba').style.display = "none";
  }
}

document.addEventListener('click', function(event) {
  var checkbox = document.getElementById('menu-toggle');
  var label = document.querySelector('label[for="menu-toggle"]');
  var elemento = document.getElementById('menu');
  
  // Verificar si el clic ocurrió fuera del checkbox y de su etiqueta asociada
  if (event.target !== checkbox && event.target !== label) {
      checkbox.checked = false; // Desmarcar el checkbox
  }
  if (checkbox.checked == false){
    elemento.style.display = 'none'; // Ocultar el elemento
  } else {
    elemento.style.display = 'block'; // Mostrar el elemento
  }
})

