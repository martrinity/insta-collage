/*validacion de login*/

var login = document.getElementById("inicia");

inicia.addEventListener("click" , function(){
	var usuario = document.getElementById("usr").value;
	var password = document.getElementById("pwd").value;

	if(usuario == ""){
		alert("Ingrese usuario válido");
	}

	if (password == "123456" || password == "098765" || password.length <= 6){
	alert("La contraseña es incorrecta. Ingrese campos validos")
}
});