const panels = document.querySelectorAll(".panel");
const cardS = document.querySelectorAll(".cuerpo");



const removeClass = () => {
    panels.forEach((panel) => {
        panel.classList.remove("active");
        panel.classList.add("thisIsACard");
    });
};

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeClass();
        panel.classList.add("active");
        panel.classList.remove("thisIsACard");
    });
});