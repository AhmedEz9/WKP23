const convertButton = document.getElementById("convertButton");

convertButton.addEventListener("click", function () {
    const celsiusInput = document.getElementById("celsiusInput").value;

    if (isNaN(celsiusInput)) {
        alert("Enter a valid temperature in Celsius.");
        return;
    }

    const celsius = parseFloat(celsiusInput);

    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

    document.getElementById("fahrenheitResult").textContent = fahrenheit.toFixed(2);
    document.getElementById("kelvinResult").textContent = kelvin.toFixed(2);
});
