export default function burger() {
  const burgerBtn = document.querySelector("#burger-btn");
  const burgerMenu = document.querySelector("#burger-menu");
  const burgerBtnClose = document.querySelector("#burger-close");

  burgerBtnClose.addEventListener("click", handleClose);

  burgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    burgerMenu.classList.toggle("open");
    document.body.classList.toggle("body-hidden");

    burgerMenu.addEventListener("click", (e) => e.stopPropagation());
    document.addEventListener("click", handleClose);
  });

  function handleClose() {
    burgerMenu.classList.remove("open");
    document.body.classList.remove("body-hidden");

    return document.removeEventListener("click", handleClose);
  }
}