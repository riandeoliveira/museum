function conversao() {
    if (document.getElementById("valor").value == "") {
        alert("Digite um valor primeiro!")
    } else {
        if (document.getElementById("opcoes").value == "") {
            alert("Selecione uma conversão!")
        }
        if (document.getElementById("opcoes").value == "1") {
            verifica()
            celsiusFahrenheit()
        }
        if (document.getElementById("opcoes").value == "2") {
            verifica()
            celsiusKelvin()
        }
        if (document.getElementById("opcoes").value == "3") {
            verifica()
            fahrenheitCelsius()
        }
        if (document.getElementById("opcoes").value == "4") {
            verifica()
            fahrenheitKelvin()
        }
        if (document.getElementById("opcoes").value == "5") {
            verifica()
            kelvinCelsius()
        }
        if (document.getElementById("opcoes").value == "6") {
            verifica()
            kelvinFahrenheit()
        }
    }
}
function verifica() {
    var valor = document.getElementById("valor").value
    if (isNaN(valor)) {
        alert("Digite um número válido!")
        document.getElementById("resultado") = ""
        return false
    } else return true
}
function minimo() {
    alert("O zero absoluto foi atingido! Ele equivale a: \n-273.15°C \n-459.67°F \n0K \nPor favor, digite um valor igual ou acima desses.")
}
function celsiusFahrenheit() {
    var valor = document.getElementById("valor").value
    var resultado = (parseFloat((valor * 9 / 5) + 32)).toFixed(2)
    if (resultado < -459.67) {
        minimo()
    } else
        if (resultado % 1 == 0) {
            document.getElementById("resultado").value = parseInt(resultado) + "°F"
        } else
            document.getElementById("resultado").value = resultado + "°F"
}
function celsiusKelvin() {
    var valor = document.getElementById("valor").value
    var resultado = (parseFloat(valor) + parseFloat(273.15)).toFixed(2)
    if (resultado < 0) {
        minimo()
    } else
        if (resultado % 1 == 0) {
            document.getElementById("resultado").value = parseInt(resultado) + "K"
        } else
            document.getElementById("resultado").value = resultado + "K"
}
function fahrenheitCelsius() {
    var valor = document.getElementById("valor").value
    var resultado = parseFloat((valor - 32) * 5 / 9).toFixed(2)
    if (resultado < -273.15) {
        minimo()
    } else
        if (resultado % 1 == 0) {
            document.getElementById("resultado").value = parseInt(resultado) + "°C"
        } else
            document.getElementById("resultado").value = resultado + "°C"
}
function fahrenheitKelvin() {
    var valor = document.getElementById("valor").value
    var resultado = (parseFloat((valor - 32) * 5 / 9 + 273.15)).toFixed(2)
    if (resultado < 0) {
        minimo()
    } else
        if (resultado % 1 == 0) {
            document.getElementById("resultado").value = parseInt(resultado) + "K"
        } else
            document.getElementById("resultado").value = resultado + "K"
}
function kelvinCelsius() {
    var valor = document.getElementById("valor").value
    var resultado = (parseFloat(valor - 273.15)).toFixed(2)
    if (resultado < -273.15) {
        minimo()
    } else
        if (resultado % 1 == 0) {
            document.getElementById("resultado").value = parseInt(resultado) + "°C"
        } else
            document.getElementById("resultado").value = resultado + "°C"
}
function kelvinFahrenheit() {
    var valor = document.getElementById("valor").value
    var resultado = (parseFloat((valor - 273.15) * 9 / 5 + 32)).toFixed(2)
    if (resultado < -459.67) {
        minimo()
    } else
        if (resultado % 1 == 0) {
            document.getElementById("resultado").value = parseInt(resultado) + "°F"
        } else
            document.getElementById("resultado").value = resultado + "°F"
}