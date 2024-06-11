window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector('.volver-arriba').style.display = "block";
  } else {
    document.querySelector('.volver-arriba').style.display = "none";
  }
}