export class CircleDiagram
{
    protected diagramHTML: SVGCircleElement
    protected circleCircumference: number
    constructor(diagramHTML: SVGCircleElement | null, circleRadius: number)
    {
        if(!diagramHTML)
            throw new Error("null argument are not alowed");
        this.diagramHTML = diagramHTML;
        this.circleCircumference = Math.PI * 2 * circleRadius;
    }
}