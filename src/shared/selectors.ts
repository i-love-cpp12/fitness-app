export function $(selector: string): Element | null
{
    return document.querySelector(selector);
}
export function $$(selector: string): NodeListOf<Element>
{
    return document.querySelectorAll(selector);
}
declare global
{
    interface Element {
        $(selector: string): Element | null;
        $$(selector: string): NodeListOf<Element>;
    }
}
Element.prototype.$ = function(selector: string): Element | null
{
    return this.querySelector(selector);
};
Element.prototype.$$ = function $$(selector: string): NodeListOf<Element>
{
    return this.querySelectorAll(selector);
};
