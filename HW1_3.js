// Task 3
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
let nonRoundedAmount = consumptionPerWeek * weeksAmount / sheetsInReamPaper;
let roundedAmount = 1;

for (var i = 1; i < nonRoundedAmount; i++) {
  roundedAmount++;
}

console.log(roundedAmount);






