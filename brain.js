function daysCalculator(year) {
    d= new Date();
    currentYear = d.getFullYear();
    age = currentYear - year;
    days = age * 365;
    return days;
}

function yearCalculatorController() {
    textyear = document.getElementById("txtyear");
    year = textyear.value;
    daysCalculator(year);
    //alert(`Tu tienes ${days} días`);
    lblAnswer = document.getElementById("lblAnswer");
    lblAnswer.innerText =` ${days} días`;
    
}



