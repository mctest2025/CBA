
function calculate() {
  const staff = parseFloat(document.getElementById("staffCount").value);
  const salary = parseFloat(document.getElementById("annualSalary").value);

  const workingDays = 260;
  const daysAbsentPerEmp = 5.5;
  const turnoverRate = 0.35;
  const turnoverMultiplier = 1.5;
  const coverMultiplier = 1.3;
  const therapyUtil = 0.03;
  const therapyCostPerCase = 120;

  const totalAbsent = staff * daysAbsentPerEmp;
  const dailySalary = salary / workingDays;
  const absenceCost = staff * dailySalary * daysAbsentPerEmp * coverMultiplier;
  const turnoverCost = staff * turnoverRate * workingDays * turnoverMultiplier;
  const therapyCost = staff * therapyUtil * therapyCostPerCase;
  const liability = absenceCost + turnoverCost + therapyCost;

  const planCost = staff * 1 * 12;
  const saving = liability - planCost;

  document.getElementById("daysAbsent").textContent = totalAbsent.toFixed(1);
  document.getElementById("dailySalary").textContent = dailySalary.toFixed(2);
  document.getElementById("absenceCost").textContent = absenceCost.toFixed(2);
  document.getElementById("turnoverCost").textContent = turnoverCost.toFixed(2);
  document.getElementById("therapyCost").textContent = therapyCost.toFixed(2);
  document.getElementById("liability").textContent = liability.toFixed(2);
  document.getElementById("netSaving").textContent = saving.toFixed(2);

  document.getElementById("results").style.display = "block";
}
