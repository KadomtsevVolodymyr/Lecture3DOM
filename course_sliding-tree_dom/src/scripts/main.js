'use strict';

const tree = document.getElementById('tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);

  span.append(span.nextSibling); 
}

tree.onclick = (hide) => {

  if (hide.target.tagName != 'SPAN') {
    return;
  }

  const childrenContainer = hide.target.parentNode.querySelector('ul');

  if (!childrenContainer) {
    return;
  }
  childrenContainer.hidden = !childrenContainer.hidden;
};