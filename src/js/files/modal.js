export default function modal() {
  const buttonsModal = document.querySelectorAll(".btn-modal");

  if (buttonsModal.length) {
    buttonsModal.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();

        const modalId = btn.dataset.modal;
        const currentModal = document.querySelector(`.modal[data-modal="${modalId}"]`);
        const modalWindow = currentModal.querySelector(".modal__window");
        const btnClose = currentModal.querySelector(".modal__close");

        btnClose.addEventListener("click", handleClose);

        document.addEventListener("click", handleClose);
        modalWindow.addEventListener("click", (e) => e.stopPropagation());

        currentModal.classList.add("open");
        document.body.classList.add("body-hidden");
      });
    });

    function handleClose(e) {
      let currentModal = e.target.closest(".modal");

      if (!currentModal) currentModal = document.querySelector(".modal.open");

      currentModal.classList.add("hide");
      setTimeout(() => {
        document.body.classList.remove("body-hidden");
        currentModal.classList.remove("open");
        currentModal.classList.remove("hide");
      }, 500);

      return document.removeEventListener("click", handleClose);
    }
  }
}
