function clearClassBody() {
    const body = document.querySelector("body");
    body.removeAttribute("class");
    
}

function openModal() {
    const modalOverlay = document.querySelector(".overlay");
    modalOverlay.classList.add("active");
}

function closeModal() {
    const modalOverlay = document.querySelector(".overlay");
    modalOverlay.classList.remove("active");
}

function changeTheme(e) {
    clearClassBody();
    const themeChoose = e.target.parentNode.getAttribute("data-theme");
    const body = document.querySelector("body");

    if (themeChoose == "blue") {
        clearClassBody();
        closeModal();
        return;
    }

    body.classList.add(`${themeChoose}`);
    closeModal();
}

const btnCloseModal = document.querySelector(".modal .btnClose");
btnCloseModal.addEventListener("click", closeModal );

const themes = document.querySelectorAll(".modal .theme span");

for (let theme of themes) {
    theme.addEventListener("click", changeTheme );
}