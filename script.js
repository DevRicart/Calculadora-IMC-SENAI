
function calcularIMC() {

    var nome = document.getElementById("name").value;
    var peso = parseFloat(document.getElementById("weight").value);
    var altura = parseFloat(document.getElementById("height").value);


    if (nome === "" || peso === "" || altura === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var imc = peso / (altura * altura);


    var resultado = document.getElementById("resultado");
    resultado.innerHTML = nome + ", seu IMC é: " + imc.toFixed(2);

    if (imc < 18.5) {
        resultado.innerHTML += "<br>Abaixo do peso. Alimente-se melhor.";
    } else if (imc < 24.9) {
        resultado.innerHTML += "<br>Peso normal. Parabéns, continue assim!";
    } else if (imc < 29.9) {
        resultado.innerHTML += "<br>Sobrepeso. Cuide da alimentação e dos hábitos.";
    } else {
        resultado.innerHTML += "<br>Obesidade. Sua procure um médico imediatamente!";
    }
}