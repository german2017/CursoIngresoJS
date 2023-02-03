/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado;

	nombreIngresado = prompt("Ingrese su nombre");
	//txtIdNombre.value = nombreIngresado;
	document.getElementById("txtIdNombre").value = nombreIngresado;
}

/*E:prompt
P:X
S:id

txtIdNombre
*/