function hideScroll() {
  document.body.classList.toggle('hide-overflow');
}

// BUY NOW
(() => {
  const refs = {
    openModalBtnBuy: document.querySelector('[data-modal-open]'),
    openModalBtnTwoBuy: document.querySelector('[data-modal-open-two]'),
    closeModalBtnBuy: document.querySelector('[data-modal-close]'),
    modalBuy: document.querySelector('[data-modal]'),

    buyElementOne: document.querySelector('.modal-window__card--first'),
    buyElementTwo: document.querySelector('.modal-window__card--second'),
    buyElementThree: document.querySelector('.modal-window__card--third'),
  };

  refs.openModalBtnBuy.addEventListener('click', () => {
    toggleModal();
    hideScroll();
  });
  refs.openModalBtnTwoBuy.addEventListener('click', () => {
    toggleModal();
    hideScroll();
  });
  refs.closeModalBtnBuy.addEventListener('click', () => {
    toggleModal();
    hideScroll();
  });

  refs.buyElementOne.addEventListener('click', () => {
    refs.buyElementOne.classList.toggle('background');
  });
  refs.buyElementTwo.addEventListener('click', () => {
    refs.buyElementTwo.classList.toggle('background');
  });
  refs.buyElementThree.addEventListener('click', () => {
    refs.buyElementThree.classList.toggle('background');
  });

  function toggleModal() {
    refs.modalBuy.classList.toggle('is-hidden');
  }
})();

// INGRIDIENTS
(() => {
  const refs = {
    openModalBtnIngr: document.querySelector('[data-modal-open-ingr]'),
    openModalBtnTwoIngr: document.querySelector('[data-modal-open-ingr-two]'),
    openModalBtnThreeIngr: document.querySelector(
      '[data-modal-open-ingr-three]'
    ),
    closeModalBtnIngr: document.querySelector('[data-modal-close-ingr]'),
    modalIngr: document.querySelector('[data-modal-ingr]'),
  };

  refs.openModalBtnIngr.addEventListener('click', () => {
    toggleModal();
    hideScroll();
  });
  refs.openModalBtnTwoIngr.addEventListener('click', () => {
    toggleModal();
    hideScroll();
  });
  refs.openModalBtnThreeIngr.addEventListener('click', () => {
    toggleModal();
    hideScroll();
  });
  refs.closeModalBtnIngr.addEventListener('click', () => {
    toggleModal();
    hideScroll();
  });

  function toggleModal() {
    refs.modalIngr.classList.toggle('is-hidden-ingr');
  }
})();

// READ MORE
(() => {
  const refs = {
    openModalBtnReadMore: document.querySelector('[data-modal-open-read-more]'),
    closeModalBtnReadMore: document.querySelector(
      '[data-modal-close-read-more]'
    ),
    modalReadMore: document.querySelector('[data-modal-read-more]'),
  };

  refs.openModalBtnReadMore.addEventListener('click', () => {
    toggleModal();
    hideScroll();
  });
  refs.closeModalBtnReadMore.addEventListener('click', () => {
    toggleModal();
    hideScroll();
  });

  function toggleModal() {
    refs.modalReadMore.classList.toggle('is-hidden-read-more');
  }
})();

// OUR LOCATION
(() => {
  const refs = {
    openModalBtnLocation: document.querySelector('[data-modal-open-location]'),
    closeModalBtnLocation: document.querySelector(
      '[data-modal-close-location]'
    ),
    modalReadLocation: document.querySelector('[data-modal-location]'),
  };

  refs.openModalBtnLocation.addEventListener('click', () => {
    toggleModal();
    hideScroll();
  });
  refs.closeModalBtnLocation.addEventListener('click', () => {
    toggleModal();
    hideScroll();
  });

  function toggleModal() {
    refs.modalReadLocation.classList.toggle('is-hidden-location');
  }
})();

// FRANCHISE
(() => {
  const refs = {
    openModalBtnFranchise: document.querySelector(
      '[data-modal-open-franchise]'
    ),
    closeModalBtnFranchise: document.querySelector(
      '[data-modal-close-franchise]'
    ),
    modalReadFranchise: document.querySelector('[data-modal-franchise]'),
  };

  refs.openModalBtnFranchise.addEventListener('click', () => {
    toggleModal();
    hideScroll();
  });
  refs.closeModalBtnFranchise.addEventListener('click', () => {
    toggleModal();
    hideScroll();
  });

  function toggleModal() {
    refs.modalReadFranchise.classList.toggle('is-hidden-franchise');
  }
})();
