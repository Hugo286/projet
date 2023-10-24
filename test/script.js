// script.js

document.addEventListener("DOMContentLoaded", function () {
    const salaryForm = document.getElementById("salary-form");
    const grossSalaryInput = document.getElementById("salary");
    const grossSalaryOutput = document.getElementById("gross-salary");
    const taxDeductionsOutput = document.getElementById("tax-deductions");
    const netSalaryOutput = document.getElementById("net-salary");

    salaryForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Récupérez le salaire brut saisi par l'utilisateur
        const grossSalary = parseFloat(grossSalaryInput.value);

        // Calcul du salaire net (exemple simplifié)
        const taxRate = 0.2; // Taux de déduction fiscale fictif de 20%

        const taxDeductions = grossSalary * taxRate;
        const netSalary = grossSalary - taxDeductions;

        // Affichez les résultats dans l'interface utilisateur
        grossSalaryOutput.textContent = grossSalary.toFixed(2) + " €";
        taxDeductionsOutput.textContent = taxDeductions.toFixed(2) + " €";
        netSalaryOutput.textContent = netSalary.toFixed(2) + " €";
    });
});
