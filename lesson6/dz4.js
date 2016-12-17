function scanDOM(doc) {

  if (!doc) {
    doc = document;
  }

  let counterDOM = {};

  let rec = (doc) => {

    for(let child of doc.childNodes) {
      if(child.className) {
        if (counterDOM.hasOwnProperty(child.className)){
          counterDOM[child.className] += 1;
        } else {
          counterDOM[child.className] = 1;
        }
      }

      if(child.tagName) {
        if (counterDOM.hasOwnProperty(child.tagName)){
          counterDOM[child.tagName] += 1;
        } else {
          counterDOM[child.tagName] = 1;
        }
      }

      if(child.childNodes.length > 0) {
        rec(child);
      }
    }
  };

  rec(doc);

  for (let key in counterDOM) {
    console.log(`${key}: ${counterDOM[key]};`)
  }
}

scanDOM();