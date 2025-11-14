export function $(selector) {
    return document.querySelector(selector);
}
export function $$(selector) {
    return document.querySelectorAll(selector);
}
Element.prototype.$ = function (selector) {
    return this.querySelector(selector);
};
Element.prototype.$$ = function $$(selector) {
    return this.querySelectorAll(selector);
};
