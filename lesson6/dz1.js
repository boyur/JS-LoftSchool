let div = document.createElement('div');
div.innerHTML = "<p>Это только что созданный div с текстом внутри</p>";

let parent = document.querySelector('body');

let prepend = (container, newElement) => {
  if (container.childElementCount) {
    container.insertBefore(newElement, container.children[0]);
  } else {
    container.appendChild(newElement);
  }
};

prepend(parent, div);