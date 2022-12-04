'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//since there is multiple elements of .show-modal class, this method will return
//a node list
const btnOpenModal = document.querySelectorAll('.show-modal');


const openModal =  function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

const closeModal = function() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

//when looping trough this list
for (let i = 0; i < btnOpenModal.length; i++)
  //when clicking any of the buttons, the modal will show up
  btnOpenModal[i].addEventListener('click', openModal);


//after opening the modal, close it when clicking the close button
btnCloseModal.addEventListener("click", closeModal);

//also we should close the modal when clicking the overlay
overlay.addEventListener('click', closeModal);
