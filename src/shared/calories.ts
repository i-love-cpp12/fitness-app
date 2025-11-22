import { CircleDiagram } from "./circleDiagram.js";

export class caloriesDiagramHandler extends CircleDiagram
{
    private procentHTML: HTMLElement;
    private caloriesBurnedHTML: HTMLElement;
    private targetCaloriesBurnedHTML: HTMLElement;
    private caloriesBurned: number;
    private targetCaloriesBurned: number;
    constructor
        (diagramHTML: SVGCircleElement | null,
        procentHTML: HTMLElement | null,
        caloriesBurnedHTML: HTMLElement | null,
        targetCaloriesBurnedHTML: HTMLElement | null,
        caloriesBurned: number,
        targetCaloriesBurned: number,
        circleRadius: number)
    {
        if(!diagramHTML || !procentHTML || !caloriesBurnedHTML || !targetCaloriesBurnedHTML)
            throw new Error("null argument are not alowed");

        super(diagramHTML, circleRadius);

        this.procentHTML = procentHTML;
        this.caloriesBurnedHTML = caloriesBurnedHTML;
        this.targetCaloriesBurnedHTML = targetCaloriesBurnedHTML;
        this.caloriesBurned = caloriesBurned;
        this.targetCaloriesBurned = targetCaloriesBurned;
        this.refresh();
    }
    public setNewTarget(newTarget: number): void
    {
        if(newTarget < 0) return;
        this.targetCaloriesBurned = newTarget;
        this.refresh();
    }
    public setCaloriesBurned(newCaloriesBurned: number): void
    {
        if(newCaloriesBurned < 0)
            newCaloriesBurned = 0;
        this.caloriesBurned = newCaloriesBurned;
        this.refresh();
    }
    public addCaloriesBurned(calories: number): void
    {
        if(this.caloriesBurned + calories < 0)
            this.caloriesBurned = 0;
        else
            this.caloriesBurned += calories;
        this.refresh();
    }
    private refresh(): void
    {
        const procent: number = this.caloriesBurned / this.targetCaloriesBurned;
        this.diagramHTML.style.strokeDashoffset =
            String(Math.min(Math.max((1 - procent) * this.circleCircumference, 0), this.circleCircumference));
        this.procentHTML.innerHTML = String(Math.floor(procent * 100));
        this.caloriesBurnedHTML.innerHTML = String(this.caloriesBurned);
        this.targetCaloriesBurnedHTML.innerHTML = String(this.targetCaloriesBurned);
    }
}