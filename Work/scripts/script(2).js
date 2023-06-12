const modal = document.querySelector('.modal-window');
const overlay = document.querySelector('.modal-overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-modal');
const btnOpenModal1 = document.querySelector('.show-modal1');
console.log(btnOpenModal)

const openModal = function () {
    modal.classList.remove('hide');
    overlay.classList.remove('hide');
};

const closeModal = function () {
    modal.classList.add('hide');
    overlay.classList.add('hide');
};

btnOpenModal.addEventListener('click', () => {
    openModal()
});
btnOpenModal1.addEventListener('click', () => {
    openModal()
});
btnCloseModal.addEventListener('click', () => {
    closeModal()
});

overlay.addEventListener('click', () => {
    closeModal()
});