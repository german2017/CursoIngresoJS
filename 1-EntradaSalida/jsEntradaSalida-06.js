/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var unNumero;
	var otroNumero;
	var suma;

	unNumero = document.getElementById("txtIdNumeroUno").value; //   "7"
	otroNumero = document.getElementById("txtIdNumeroDos").value;//  "5"

	unNumero = parseFloat(unNumero);
	otroNumero = parseFloat(otroNumero);

	suma = unNumero + otroNumero;

	alert("La suma es: " + suma);


}
/*
txtIdNumeroUno
txtIdNumeroDos*/

/* 

Operadores aritmeticos
+ , -, *, /, %

Operadores relacionales
< , > , <= , >=, == , !=

Operadores logicos
&& , || , !

*/