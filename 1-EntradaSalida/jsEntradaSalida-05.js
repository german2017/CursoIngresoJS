/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{//indentacion
	var nombreIngresado;
	var apellidoIngresado;
	var edadIngresada;
	var mensaje;

	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = txtIdEdad.value;
	apellidoIngresado = prompt("Ingrese el apellido");

	mensaje = "Usted se llama " + nombreIngresado + " " + apellidoIngresado + " y tiene " + 
			  edadIngresada + " años";

	txtIdMensaje.value = mensaje;

}


	/*txtIdNombre
	txtIdEdad
	txtIdMensaje*/