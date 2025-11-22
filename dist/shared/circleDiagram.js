export class CircleDiagram {
    constructor(diagramHTML, circleRadius) {
        if (!diagramHTML)
            throw new Error("null argument are not alowed");
        this.diagramHTML = diagramHTML;
        this.circleCircumference = Math.PI * 2 * circleRadius;
    }
}
