document.addEventListener("DOMContentLoaded", function () {
    const gnbMenu = document.querySelector(".gnb");
    gnbMenu.addEventListener("click", function () {
        gnbMenu.classList.toggle("expanded");
    });
});
