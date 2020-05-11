const casas = new Array(); //Declaración del arreglo casas de estudiantes.

let registroCasa =(e) =>{


   var insercion = document.getElementById("txtCasa").value; // Asignación del input a la variable "insercion"
   
    
    if( insercion.trim()!= null && insercion.trim() != "" && /^[GHRS]{1}$/i.test(insercion)){ //Validación del campo
        if(casas.length<16){ // condicionando según la longitud máxima del array definida por 16 estudiantes
            casas.push(insercion.toLocaleUpperCase()); //insertando una "casa", elemento en el arreglo.
            document.getElementById("txtCasa").value=""; //limpiar caja de texto posterior a la inserción.
        }else{
            alert("Se han completado los registros en las casas!");
        }

    
    }else{
        alert("Hatstall - Indecisión del sombrero, ingrese una letra de entre las opciones dadas");
    }


}


let calculoPorcentajeCasas = (e) =>{

// declaración e inicialización de contadores!!
//                 G H R S
let contadorCasas=[0,0,0,0]; //inicializando array dimensión:4 en "0".
let TablaHTML='';

//////////////////////////////////////////////

casas.forEach((element, index)=>{
    
    if(element=='G'){
        contadorCasas[0]+=1;
    }else if(element=='H'){
        contadorCasas[1]+=1;
    }else if(element=='R'){
        contadorCasas[2]+=1;
    }else{
        contadorCasas[3]+=1;
    }
     
});
/////////////////////////////////

let casaDominante=-1; //Declaración de variable casa dominante.
let max=Math.max.apply(null,contadorCasas); //

if(contadorCasas[0]!=contadorCasas[1]!=contadorCasas[2]!=contadorCasas[3]){
casaDominante = contadorCasas.indexOf(max,0);

}else{
    alert("No hay posición dominante: fue una clasificación normal!!");
}

////////////////////////////////

TablaHTML=`<table border=1>
            <tr>
                <td>Gryffindor (G)</td>
                <td>${(contadorCasas[0])}</td>
                <td>${(contadorCasas[0].toFixed(1)/casas.length)*100}%</td>
            </tr>
            <tr>
                <td>Hufflepuff (H)</td>
                <td>${(contadorCasas[1])}</td>
                <td>${(contadorCasas[1].toFixed(1)/casas.length)*100}%</td>
            </tr>
            <tr>
                <td>Ravenclaw (R)</td>
                <td>${(contadorCasas[2])}</td>
                <td>${(contadorCasas[2].toFixed(1)/casas.length)*100}%</td>
            </tr>
            <tr>
                <td>Slytherin (S)</td>
                <td>${(contadorCasas[3])}</td>
                <td>${(contadorCasas[3].toFixed(1)/casas.length)*100}%</td>
            </tr>
            <tr>
                <td>Casa dominante</td>
                <td>En el índice:</td>
                <td>${(casaDominante)}</td>
            </tr>
           </table>`
document.getElementById("resultadosAsignación").innerHTML=TablaHTML; //asignación de la tabla a generar dentro del html "index.html".

}


// Disparadores de eventos
document.getElementById('btnAsignar').addEventListener('click',registroCasa);
document.getElementById('btnCalcular').addEventListener('click',calculoPorcentajeCasas);

