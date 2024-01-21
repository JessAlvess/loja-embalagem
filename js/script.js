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

  const modal = document.querySelector('.container-modal');

addEventListener('click', (event) => {
  if (event.target.id === 'fale-conosco') {
    onOpen();
  } else if (event.target.classList.contains('close')) {
    onClose();
  }
})

  function onClose() {
    modal.classList.remove('active');
  }

  function onOpen() {
    modal.classList.add('active');
  }