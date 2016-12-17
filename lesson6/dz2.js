let div = document.getElementById('dz2');

let deleteTextNodes = (div) => {
  for (let child of div.childNodes) {
    if (child.nodeType == 3) {
      child.remove();
    }
  }
  console.log(div.childNodes);
};

deleteTextNodes(div);