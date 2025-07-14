
function formatCurrency(value) {
    return value.toLocaleString('en-UK', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function calculate() {
    const staffCount = parseFloat(document.getElementById('staffCount').value);
    const avgSalary = parseFloat(document.getElementById('averageSalary').value);

    const workingDays = 220;
    const absenceRate = 0.025;
    const turnoverRate = 0.08;
    const therapyRate = 0.1;
    const therapyCostPerCase = 36;
    const pepmCost = 3;

    const daysAbsent = staffCount * workingDays * absenceRate;
    const dailySalary = avgSalary / workingDays;

    const absenceCost = daysAbsent * dailySalary;
    const turnoverCost = staffCount * turnoverRate * avgSalary * 0.2;
    const therapyCost = staffCount * therapyRate * therapyCostPerCase;
    const potentialLiability = absenceCost + turnoverCost + therapyCost;
    const planCost = staffCount * pepmCost * 12;
    const netSaving = potentialLiability - planCost;

    document.getElementById('daysAbsent').innerText = daysAbsent.toFixed(1);
    document.getElementById('dailySalary').innerText = formatCurrency(dailySalary);
    document.getElementById('absenceCost').innerText = formatCurrency(absenceCost);
    document.getElementById('turnoverCost').innerText = formatCurrency(turnoverCost);
    document.getElementById('therapyCost').innerText = formatCurrency(therapyCost);
    document.getElementById('potentialLiability').innerText = formatCurrency(potentialLiability);
    document.getElementById('netSaving').innerText = formatCurrency(netSaving);
}
