import { $ } from "../shared/selectors.js";
import { caloriesDiagramHandler } from "../shared/calories.js";
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

const caloriesHandler = new caloriesDiagramHandler(
    $(".body-stats-expanded .circle-diagram > svg > circle:last-child") as SVGCircleElement,
    $(".colories-burned .circle-diagram > .numbers > .procent > span") as HTMLElement,
    $(".colories-burned .circle-diagram > .numbers > .burned-target > .calories-burned") as HTMLElement,
    $(".colories-burned .circle-diagram > .numbers > .burned-target > .calories-target") as HTMLElement,
    200,
    800,
    46
);
