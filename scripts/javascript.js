function errorusuario(){
    var nom = document.getElementById("user").value;
    if(nom == ""){
        document.getElementById("eruser").innerHTML = "*Escribe un nombre";
		return false;
	}else {
		document.getElementById("eruser").innerHTML ="";
		return true;
    }
}

function errorcontraseña(){
    var contraseña = document.getElementById("pass").value;
    if(contraseña == ""){
		document.getElementById("erpass").innerHTML = "*Escribe una contraseña";
		return false;
	}else{
	document.getElementById("erpass").innerHTML ="";
	}
	//8 caracteres y mayuscula
	var letra;
	var mayus=0;
	var c=0;
	var num=0;

	while(c < contraseña.length){
		letra = contraseña[c];
		if(letra>=0 && letra<=9){
			num++;
		}else if(letra == letra.toUpperCase()){
			mayus++;
			console.log(i);
		}
		c++;
	}
		if(contraseña.length >= 8 && mayus>0){
		document.getElementById("erpass").innerHTML= "";
		return true;
	}else{
		document.getElementById("erpass").innerHTML="*Debe contener 8 caracteres y 1 mayuscula.";
		return false;
	}
}

function errorccontraseña(){
	var contraseña2 = document.getElementById("cpass").value;
	var contraseña = document.getElementById("pass").value;
	if(contraseña2 == ""){
		document.getElementById("ercpass").innerHTML = "*Escriu la confirmació";
		return false;
	}else {
		document.getElementById("ercpass").innerHTML = "";
		//comprobacio
		if(contraseña == contraseña2){
			document.getElementById("ercpass").innerHTML ="";
			return true;
		}else {
			document.getElementById("ercpass").innerHTML ="*Las contraseñas no coinciden";
			return false;
		}
	}
}

function errormail(){
	var email = document.getElementById("mail").value;
	if(email == ""){
		document.getElementById("ermail").innerHTML = "*Escriu una direcció e-mail";
		return false;
	}else{
		document.getElementById("ermail").innerHTML ="";
		return true;
	}
}
function validar_form(){
	if(errorusuario() == true && errorcontraseña() == true && errorccontraseña() == true && errormail == true){ 
		alert("Datos enviados correctamente");
		return true;
	}else{ 
		alert("Por favor, completa todos los campos correctamente.");
		return false;
	}
}



function mostrar_mas(){
    var div = document.getElementById("vermas");
    var menos = document.getElementById("vmenos");
    var mas = document.getElementById("vmas");
    div.style.display="block";
    menos.style.display="block";
    mas.style.display="none";
}
function mostrar_menos(){
    var div = document.getElementById("vermas");
    var menos = document.getElementById("vmenos");
    var mas = document.getElementById("vmas");
    div.style.display="none";
    menos.style.display="none";
    mas.style.display="block";
}