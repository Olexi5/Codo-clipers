(() => {
  const refs = {
    openProductModalBtn: document.querySelector('[data-product-modal-open]'),
    closeProductModalBtn: document.querySelector('[data-product-modal-close]'),
    productmodal: document.querySelector('[data-product-modal]'),
  };
 
  refs.openProductModalBtn.addEventListener('click', toggleProductModal);
  refs.closeProductModalBtn.addEventListener('click', toggleProductModal);

  function toggleProductModal() {
    refs.productmodal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
