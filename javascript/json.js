$(document).ready(function(){

$('#send').on('click',function(event){
	event.preventDefault();

	var nombre= $('#nombre').val();
	var edad=$('#edad').val();
	var mail= $('#mail').val();
	var apellido= $('#apellido').val();
	var motivo= $('#motiv').val();
	var interes = $('#myInterest').val();
	var text=$('#extra');

	console.log("edad es: "+edad)

	if(validar(nombre, edad, interes, apellido, mail) == true){
			var jdatosSON = {"nombre":nombre,"mail":mail,"apellido":apellido,"edad":edad, "motivo":motivo,"interes":interes, "consulta":text}
			var J= JSON.stringify(jdatos)
			var a='<a href=index.html?datos='+J+'>link</a>'
		}
	})
})


function validarRequeridos(nombre){

	nombre.trim();

	if(nombre.length == 0){

		return false;
	}
	
	return true;
}
function validarRequeridos(apellido){

	apellido.trim();

	if(apellido.length == 0){

		return false;
	}
	
	return true;
}
function validarEdad(edad){
	edad.trim();
	if(edad.length== 0 || isNaN(edad)){
		return false;
	}
	return true;
};

function ValidarScroll(interes){

	if(interes === "int" ){
		return false;
	}
	return true;
}

/**
 *  Valida 
 *
 **/

function validarMail(mail){

  mail.trim();

  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if(emailRegex.test(mail)){

  	return true;
  }

  return false;
}



function validar(nombre, edad, interes, apellido, mail){

	//var ul = $('#error');
	var ul = $("#error");
	console.log("interes es: "+interes);

	valido = true; 
 

		if(validarRequeridos(nombre)== false) {
			msg = "<li>El nombre es un campo requerido</li>";
			ul.append(msg);
			valido = false;
		}
		if (validarEdad(edad)==false){
			msg='<li>La edad es un campo requerido</li>'
			ul.append(msg);
			valido=false;
		}
		if (ValidarScroll(interes)==false){
			msg='<li>Por favor detalle el curso de su interes</li>'
			ul.append(msg);
			valido=false;
		}
		/* Por como esta el HTML No hay forma de que este campo quede vacio
		if(ValidarScroll(motivo)==false){
			msg='<li>Por favor detalle el motivo de su consulta</li>'
			ul.append(msg);
			valido=false;
		}
		*/
		if(validarRequeridos(apellido)==false){
				msg = "<li>El apellido es un campo requerido</li>";
			ul.append(msg);
			valido = false;
		}
		
		if(validarRequeridos(mail)== false){

			msg = "<li>El mail es un campo requerido</li>";
			ul.append(msg);
			valido = false;

		}else{

			if(validarMail(mail) == false){

				msg = "<li>Debe ingresar mail valido.</li>";
				ul.append(msg);
				valido = false;	
			
			}
		}
		return valido;
}

		
