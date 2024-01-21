window.onscroll = function() {
    cestaFlutuante();
  };
  
  function cestaFlutuante() {
    let button = document.querySelector('#flutuante');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  }