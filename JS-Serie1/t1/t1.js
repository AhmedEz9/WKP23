document.getElementById("convertButton").addEventListener("click", function () {
    // Get the temperature in Celsius from the input field
    const celsius = parseFloat(document.getElementById("celsiusInput").value);

    // Check if the input is a valid number
    if (!isNaN(celsius)) {
        // Calculate the temperature in Fahrenheit and Kelvin
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;

        // Display the results in the HTML document
        document.getElementById("fahrenheitResult").textContent = fahrenheit.toFixed(2);
        document.getElementById("kelvinResult").textContent = kelvin.toFixed(2);
    } else {
        // Display an error message if the input is not a valid number
        alert("Please enter a valid temperature in Celsius.");
    }
});
