document.getElementById('btn').addEventListener('click', function () {
    // Get input values
    const loanAmount = parseFloat(document.querySelector('#LoanAmt input').value);
    const annualRate = parseFloat(document.querySelector('#Rate input').value);
    const timeDuration = parseFloat(document.querySelector('#time input').value);

    if (isNaN(loanAmount) || isNaN(annualRate) || isNaN(timeDuration) || loanAmount <= 0 || annualRate <= 0 || timeDuration <= 0) {
        alert('Please enter valid positive numbers for Loan Amount, Interest Rate, and Time Duration.');
        return;
    }

    // Convert annual rate to monthly rate and time duration to months
    const monthlyRate = annualRate / 12 / 100;
    const months = timeDuration * 12;

    // Calculate Monthly Payment using the formula: M = P[r(1+r)^n]/[(1+r)^n - 1]
    const numerator = monthlyRate * Math.pow(1 + monthlyRate, months);
    const denominator = Math.pow(1 + monthlyRate, months) - 1;
    const monthlyPayment = loanAmount * (numerator / denominator);

    // Calculate Total Payment and Total Interest
    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - loanAmount;

    // Display the results
    document.querySelector('#Mpay input').value = monthlyPayment.toFixed(2);
    document.querySelector('#Tpay input').value = totalPayment.toFixed(2);
    document.querySelector('#Tin input').value = totalInterest.toFixed(2);

    // Make the chart division visible
    document.querySelector('.chart').style.display = 'block';
});

// Initially hide the chart division
document.querySelector('.chart').style.display = 'none';