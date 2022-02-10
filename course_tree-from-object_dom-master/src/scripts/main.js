'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};


function createTree(container, data) {
   const ul = container.appendChild(document.createElement('ul'));

   for (const [key, val] of Object.entries(data)) {

     const li = ul.appendChild(document.createElement('li'));

     li.textContent = key;
     
     if (Object.keys(val).length) {

       createTree(li, val);
     }
   }
 }
 
 createTree(document.querySelector('#tree'), food);
