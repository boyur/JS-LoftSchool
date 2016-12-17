let accordion = document.getElementById('accordion');

console.log(accordion);

accordion.addEventListener('click', function (e) {
  let item = e.target.parentNode;

  let sizeText = item.children[1].textContent.length;

  console.log(item.children[1].textContent.length);

  if (item.classList.contains('active')) {
    item.classList.remove('active');
    item.children[1].style.maxHeight = "0px";
  } else {
    item.classList.add('active');
    item.children[1].style.maxHeight = Math.round(sizeText / 100) * 18 + "px";
  }

});

