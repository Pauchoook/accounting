export default function smoothScroll() {
  const yOffset = document.querySelector(".header").clientHeight;
  console.log(yOffset)

  document.querySelectorAll('a[href*="#"]').forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const blockID = btn.getAttribute("href").substring(1);
      const element = document.getElementById(blockID);

      if (element) {
        e.preventDefault();
      } else {
        return;
      }

      const y = element.getBoundingClientRect().top + window.scrollY - yOffset;
      console.log(y)

      const burgerMenu = document.querySelector("#burger-menu");

      if (burgerMenu.classList.contains("open")) {
        burgerMenu.classList.remove("open");
        document.body.classList.remove("body-hidden");
      }

      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
}