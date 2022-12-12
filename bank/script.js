'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//this selects the entire page
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

//this returns a nodeList that consists of the button items
console.log(document.querySelectorAll('button'));
//getElementBy... method returns a HTMLCollection, which applies the updates directly
console.log(document.getElementsByTagName('button'));
console.log(document.getElementsByClassName('operations'));

const header = document.querySelector('.header');
//creating an html element
const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML =
  'writing the text of the message element <button class= "btn btn--close-cookie";>button</button>';

//this adds the element as the first child of the header
//header.prepend(message);
//this takes that element and makes it as the last child, since there is only one message element. To copy it you should use
header.append(message);
//header.prepend(message.cloneNode(true));
//before and after methods, as there names indicate, will but the element right after the header as sibling
header.before(message);
header.after(message);

//remove the element as we press the button

/*document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});*/
//did the same as below
message.addEventListener('click', () => {
  message.remove();
  //the old way of doing it:
  //message.parentElement.removeChild(message);
});

//styles
message.style.backgroundColor = 'green';
message.style.width = '120%';

//accessing attributes
//this is an image with the class nav__logo
const logo = document.querySelector('.nav__logo');
//can access the standard attributes just by logo.
console.log(logo.src, logo.alt);
//but with unstandard attributes, it will return undefined. So using logo.getAttribute('') is safer
console.log(logo.getAttribute('class'));

