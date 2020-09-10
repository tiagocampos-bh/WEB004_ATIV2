function executeimc(){
		location.href = "index.html";
}

function executeret(){
		location.href = "ret.html";
}

function executecirc(){
		location.href = "circ.html";
}

function calcularimc() {
	var peso = document.getElementById("peso").value;
	var alt = document.getElementById("altura").value;
	if (peso == "" || alt == "") {
		alert("O preenchimento dos dois campos é obrigatório!");
	}	else {
			var imc = peso / (alt*alt);
			alert ("O resultado é " + imc);
	}
}

function calcularret() {
	var base = document.getElementById("base").value;
	var altret = document.getElementById("alturaret").value;
	if (base == "" || altret == "") {
		alert("O preenchimento dos dois campos é obrigatório!");
	}	else {
			var area = base * altret;
			alert ("O resultado é " + area);
	}
}

function calcularcirc() {
	var raio = document.getElementById("raio").value;
	if (raio == "") {
		alert("O preenchimento do campo é obrigatório!");
	}	else {
			var area = 2 * 3.141592653589793 * raio;
			alert ("O resultado é " + area);
	}
}