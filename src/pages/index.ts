import { $ } from "../shared/selectors.js";

$(".header > .options > .haburger-menu > div")?.addEventListener("click", () => {
    if(!document.body.classList.contains("navbar-expanded"))
        document.body.classList.add("navbar-expanded");
});

$(".navbar > .close-menu")?.addEventListener("click", () => {
    if(document.body.classList.contains("navbar-expanded"))
        document.body.classList.remove("navbar-expanded");
});

window.matchMedia("(max-width: 530px)").addEventListener("change", (navbar_hide_q) => {
    if(!navbar_hide_q.matches && document.body.classList.contains("navbar-expanded"))
    {
        document.body.classList.remove("navbar-expanded");
    }
})