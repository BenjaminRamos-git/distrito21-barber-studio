const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");

  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Cerrar menú" : "Abrir menú"
  );
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menú");
  });
});