let accordion = document.getElementById('accordion');

console.log(accordion);

accordion.addEventListener('click', function (e) {
  let item = e.target.parentNode;

  if (item.classList.contains('active')) {
    item.classList.remove('active');
  } else {
    item.classList.add('active');
  }

});

