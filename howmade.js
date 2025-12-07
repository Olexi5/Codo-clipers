(() => {
  const refs = {
    openHowMadeModalBtn: document.querySelector('[data-howmade-modal-open]'),
    closeHowMadeModalBtn: document.querySelector('[data-howmade-modal-close]'),
    howmademodal: document.querySelector('[data-howmade-modal]'),
  };

  refs.openHowMadeModalBtn.addEventListener('click', toggleHowMadeModal);
  refs.closeHowMadeModalBtn.addEventListener('click', toggleHowMadeModal);

  function toggleHowMadeModal() {
    refs.howmademodal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
