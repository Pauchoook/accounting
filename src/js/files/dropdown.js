export default function dropdown() {
  const buttonsDropdown = document.querySelectorAll(".dropdown__btn");
  const allDropdowns = document.querySelectorAll(".dropdown");

  if (buttonsDropdown.length) {
    buttonsDropdown.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const dropdown = btn.closest(".dropdown");

        
        if (dropdown.classList.contains("active")) {
          dropdown.classList.remove("active");
        } else {
          allDropdowns.forEach(d => d.classList.remove("active"));
          document.addEventListener("click", handleClose);

          dropdown.classList.add("active");
          dropdown.addEventListener("click", (e) => e.stopPropagation());
        }
      });
    });

    function handleClose() {
      const currentDropdown = document.querySelector(".dropdown.active");

      currentDropdown.classList.remove("active");

      return document.removeEventListener("click", handleClose);
    }
  }
}
