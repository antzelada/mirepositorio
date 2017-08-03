function checkRut(rut) {
    // Despejar Puntos
    var valor = rut.value.replace('.','');
    // Despejar Guión
    valor = valor.replace('-','');
    
    // Aislar Cuerpo y Dígito Verificador
    cuerpo = valor.slice(0,-1);
    dv = valor.slice(-1).toUpperCase();
    
    // Formatear RUN
    rut.value = cuerpo + '-'+ dv
    
    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if(cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false;}
    
    // Calcular Dígito Verificador
    suma = 0;
    multiplo = 2;
    
    // Para cada dígito del Cuerpo
    for(i=1;i<=cuerpo.length;i++) {
    
        // Obtener su Producto con el Múltiplo Correspondiente
        index = multiplo * valor.charAt(cuerpo.length - i);
        
        // Sumar al Contador General
        suma = suma + index;
        
        // Consolidar Múltiplo dentro del rango [2,7]
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
  
    }
    
    // Calcular Dígito Verificador en base al Módulo 11
    dvEsperado = 11 - (suma % 11);
    
    // Casos Especiales (0 y K)
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
    
    // Validar que el Cuerpo coincide con su Dígito Verificador
    if(dvEsperado != dv) { rut.setCustomValidity("RUT Inválido"); return false; }
    
    // Si todo sale bien, eliminar errores (decretar que es válido)
    rut.setCustomValidity('');
}

function chec(texto,id) {
   var patron = /^[a-zA-Z\sáéíóúñ]*$/; 
   /*if (id == "mNombre")
    {texto.value= texto.value.trim();}*/
if(patron.test(texto.value) & texto.value != "")
    {
        document.getElementById(id).innerHTML = "";
         texto.style.border = "2px solid green";
    } else {
        document.getElementById(id).innerHTML = "campo requerido, Solo puede ingresar letras";
         texto.style.border = "2px solid red";
    }
}
function checkCorreo(correo,id) {
   var patronCorreo = /^[a-zA-Z]+[a-zA-Z0-9\._-]*@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,6}$/;
   /*if (id == "mNombre")
    {correo.value= correo.value.trim();}*/
if(patronCorreo.test(correo.value) & correo.value != "")
    {
        document.getElementById(id).innerHTML = "";
         correo.style.border = "2px solid green";
    } else {
        document.getElementById(id).innerHTML = "campo requerido, Ingrese correo valido";
         correo.style.border = "2px solid red";
    }
}




