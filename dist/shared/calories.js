import { CircleDiagram } from "./circleDiagram.js";
export class caloriesDiagramHandler extends CircleDiagram {
    constructor(diagramHTML, procentHTML, caloriesBurnedHTML, targetCaloriesBurnedHTML, caloriesBurned, targetCaloriesBurned, circleRadius) {
        if (!diagramHTML || !procentHTML || !caloriesBurnedHTML || !targetCaloriesBurnedHTML)
            throw new Error("null argument are not alowed");
        super(diagramHTML, circleRadius);
        this.procentHTML = procentHTML;
        this.caloriesBurnedHTML = caloriesBurnedHTML;
        this.targetCaloriesBurnedHTML = targetCaloriesBurnedHTML;
        this.caloriesBurned = caloriesBurned;
        this.targetCaloriesBurned = targetCaloriesBurned;
        this.refresh();
    }
    setNewTarget(newTarget) {
        if (newTarget < 0)
            return;
        this.targetCaloriesBurned = newTarget;
        this.refresh();
    }
    setCaloriesBurned(newCaloriesBurned) {
        if (newCaloriesBurned < 0)
            newCaloriesBurned = 0;
        this.caloriesBurned = newCaloriesBurned;
        this.refresh();
    }
    addCaloriesBurned(calories) {
        if (this.caloriesBurned + calories < 0)
            this.caloriesBurned = 0;
        else
            this.caloriesBurned += calories;
        this.refresh();
    }
    refresh() {
        const procent = this.caloriesBurned / this.targetCaloriesBurned;
        this.diagramHTML.style.strokeDashoffset =
            String(Math.min(Math.max((1 - procent) * this.circleCircumference, 0), this.circleCircumference));
        this.procentHTML.innerHTML = String(Math.floor(procent * 100));
        this.caloriesBurnedHTML.innerHTML = String(this.caloriesBurned);
        this.targetCaloriesBurnedHTML.innerHTML = String(this.targetCaloriesBurned);
    }
}
