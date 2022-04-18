const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
  const getListItem = document.querySelector('.list-item');
  getListItem.classList.toggle('active');
  hamburger.classList.toggle('active');
});

const getForm = document.getElementById('form');
