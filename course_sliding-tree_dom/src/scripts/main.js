'use strict';

const tree = document.querySelector('.tree');
const allLi = tree.querySelectorAll('li');

for (const li of allLi) {
  li.classList.add('showOnClick');

}

tree.addEventListener('click', (hide) => {
  if (hide.target.children.length > 0){
    hide.target.children[0].hidden = !hide.target.children[0].hidden;
  }

});
