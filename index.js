function convertTemperature() {
    const Temperature = parseFloat(document.getElementById("temperature").value);
    const selectedUnit = document.getElementById("unitSelect").value;
    let convertedTemperature = 0;
    let convertedUnit = "";

    if (selectedUnit === "celsius") {
        convertedTemperature = round(Temperature - 32) * (5 / 9);
        convertedUnit = "Celsius";
    } else if (selectedUnit === "fahrenheit") {
        convertedTemperature = (Temperature * 9 / 5) + 32;
        convertedUnit = "Fahrenheit";
    } else if (selectedUnit === "kelvin") {
        convertedTemperature = Temperature + 273.15;
        convertedUnit = "Kelvin";
    }

    const resultForm = document.getElementById("resultForm");
    const convertedTemperatureField = document.getElementById("convertedTemperature");

    convertedTemperatureField.value = convertedTemperature.toFixed(2);

}