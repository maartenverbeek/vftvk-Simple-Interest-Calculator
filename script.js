function computeResult()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var futureyear = parseInt(years) + new Date().getFullYear();
    var result = document.getElementById("result");
    result.innerHTML = 
        '<div>' +
            'If you deposit <span class="number" id="principalResult\">' + principal + '</span>,<br/>' +
            'at an interest rate of <span class="number" id="rateResult">' + rate + '</span>%.<br/>' +
            'You will receive an amount of <span class="number" id="interestResult">' + interest + '</span>,<br/>' +
            'in the year <span class="number" id="futureYearResult">' + futureyear + '</span>.<br/>' +
        '</div>'
}

function displayRate()
{
    var rate = document.getElementById("rate").value;
    var rateValue = document.getElementById("rateValue");
    rateValue.textContent = rate + " %";
}

function validatePrincipal()
{
    var principalInput = document.getElementById("principal");
    var principal = principalInput.value;
    if (principal <= 0) {
        alert("Enter a positive number");
        principalInput.focus();
    }
    rateValue.innerText = rate + " %";
}