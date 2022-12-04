'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//since there is multiple elements of .show-modal class, this method will return
//a node list
const btnOpenModal = document.querySelectorAll('.show-modal');

//when looping trough this list
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
