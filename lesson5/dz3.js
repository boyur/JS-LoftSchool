let div = document.getElementById('dz2');

function deleteTextNodes(div) {
  let childNodes = div.childNodes;

  console.log(childNodes);

  for (let i = 0; i < childNodes.length; i++) {
    console.log(childNodes[i]);
    if(childNodes[i].nodeType === 3) {
      childNodes[i].remove();
      --i;
    } else {
      deleteTextNodes(childNodes[i]);
    }
  }
}

deleteTextNodes(div);