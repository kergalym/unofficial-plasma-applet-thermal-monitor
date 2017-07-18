function toFahrenheit(celsia) {
    return celsia * (9/5) + 32
}

function getTemperature(celsiaDouble, fahrenheitEnabled) {
    var fl = celsiaDouble
    if (fahrenheitEnabled) {
        fl = toFahrenheit(fl)
    }
    return Math.round(fl)
}
