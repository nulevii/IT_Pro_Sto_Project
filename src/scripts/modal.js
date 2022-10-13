(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    openModalBtnTwo: document.querySelector("[data-modal-open-two]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtnTwo.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();


(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-ingr]"),
    closeModalBtn: document.querySelector("[data-modal-close-ingr]"),
    modal: document.querySelector("[data-modal-ingr]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtnTwo.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-ingr");
  }
})();