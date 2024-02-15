
//efectos de las imagenes
const inputTexto = document.getElementById('texto');
const imagen = document.getElementById('candado');
const imagen2 = document.getElementById('alura');

// Efecto de movimiento de la imagen del candado 
inputTexto.addEventListener('input', () => { 
    imagen.classList.add('movimiento-arriba-abajo');
    setTimeout(() => {
        imagen.classList.remove('movimiento-arriba-abajo');
    }, 100);
});

// Efecto de movimiento del logo Alura
inputTexto.addEventListener("input", () => {
    const texto = inputTexto.value;
    const angulo = texto.length * 360; 
    imagen2.style.transform = `rotateY(${angulo}deg)`;   
});

/*------- slider ------------*/

const slider = document.getElementById('slider');

slider.addEventListener('change',function() {
    const stylesheet = document.getElementById('stylesheet'); 
    if (this.checked) {
        stylesheet.setAttribute('href', 'css/styles.css');
    }else {
        stylesheet.setAttribute('href', 'css/toggle.css')
    }
});


/*------------llamado de elementos----------------*/
const encriptar = document.querySelector(".boton-encriptar");
const desencriptar = document.querySelector(".boton-desencriptar");
const txtEncriptar = document.querySelector(".encriptar");
const alerta = document.querySelector(".texto-aviso");
const answer = document.querySelector(".evaluar");
const content = document.querySelector(".tarjeta-contenedor");
const botonCopiar = document.querySelector(".boton-copiar");

//----Boton encriptado
encriptar.addEventListener("click", e=> {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace( /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g,"");
    console.log(txt)

    if (texto =="") {
        alerta.style.color = "#FF0000";
        alerta.style.fontWeight = "800";
        alerta.textContent = "El campo de texto no debe estar vacio";

        setTimeout(() =>{ 
            alerta.removeAttribute("style")

        } ,1500);  
    }
    else if ( texto!==txt){
        alerta.style.color = "#FF0000";
        alerta.style.fontWeight = "800";
        alerta.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(() =>{ 
            alerta.removeAttribute("style")

        } ,1500); 
    }
    else if(texto !== texto.toLowerCase()){
        alerta.style.color = "#FF0000";
        alerta.style.fontWeight = "800";
        alerta.textContent = "El texto no debe contener mayusculas";

        setTimeout(() =>{ 
            alerta.removeAttribute("style")

        } ,1500); 
    }
    else {
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");
    } 
    
    answer.innerHTML = texto;
    botonCopiar.style.visibility = "inherit";

    content.remove();
});
    
/*------- boton desencriptado---------*/
desencriptar.addEventListener("click", e=> {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace( /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g,"");
    console.log(txt)

    if (texto =="") {
        alerta.style.color = "#FF0000";
        alerta.style.fontWeight = "800";
        alerta.textContent = "El campo de texto no debe estar vacio";

        setTimeout(() =>{ 
            alerta.removeAttribute("style")

        } ,1500);  
    }
    else if ( texto!==txt){
        alerta.style.color = "#FF0000";
        alerta.style.fontWeight = "800";
        alerta.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(() =>{ 
            alerta.removeAttribute("style")

        } ,1500); 
    }
    else if(texto !== texto.toLowerCase()){
        alerta.style.color = "#FF0000";
        alerta.style.fontWeight = "800";
        alerta.textContent = "El texto no debe contener mayusculas";

        setTimeout(() =>{ 
            alerta.removeAttribute("style")

        } ,1500); 
    }
    else {
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");
    } 
    
    answer.innerHTML = texto;
    botonCopiar.style.visibility = "inherit";

    content.remove();
});

/*------- boton copiar ---------*/
botonCopiar.addEventListener("click", e=> {
    e.preventDefault();

    let copiar = answer; 
    copiar.select();
    document.execCommand("copy");

});



