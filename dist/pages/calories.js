"use strict";
class caloriesDiagramHandler {
    constructor(diagramHTML, procentHTML, caloriesBurnedHTML, targetCaloriesBurnedHTML, caloriesBurned, targetCaloriesBurned, diagramRadius) {
        if (!diagramHTML || !procentHTML || !caloriesBurnedHTML || !targetCaloriesBurnedHTML)
            throw new Error("null argument are not alowed");
        this.diagramHTML = diagramHTML;
        this.procentHTML = procentHTML;
        this.caloriesBurnedHTML = caloriesBurnedHTML;
        this.targetCaloriesBurnedHTML = targetCaloriesBurnedHTML;
        this.caloriesBurned = caloriesBurned;
        this.targetCaloriesBurned = targetCaloriesBurned;
        this.diagramCircumference = Math.PI * 2 * diagramRadius;
    }
    setNewTarget() {
    }
    refresh() {
        const procent = ;
    }
}
