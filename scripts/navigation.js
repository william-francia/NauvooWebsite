const menuButton = document.querySelector("#hamburgeridmenu");
const mainNavigation = document.querySelector("#navidmenu");

if (menuButton && mainNavigation) {
    const setMenuOpen = (isOpen) => {
        menuButton.classList.toggle("show", isOpen);
        mainNavigation.classList.toggle("show", isOpen);
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    };

    menuButton.addEventListener("click", () => {
        setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
    });

    mainNavigation.addEventListener("click", (event) => {
        if (event.target.closest("a")) setMenuOpen(false);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") setMenuOpen(false);
    });
}

const currentYear = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");
if (currentYear) currentYear.textContent = new Date().getFullYear();
if (lastModified) lastModified.textContent = `Last Modified: ${document.lastModified}`;