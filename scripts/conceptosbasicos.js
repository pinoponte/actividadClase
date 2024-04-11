//para comentar se utiliza eslash eslash 


console.log("hola Desarrolladores y psicologos");
console.log("mi mensaje");

// conceptos basicos en js
// 1. tipos de variables
// 2. manejo del don
// 3. condicionales
// 4. ciclos

//LAS VARIABLES EN JS
// hay tres tipos de variables en js pero nostoros solo utilizamos dos
// var-> ya no se usa y no la utilizaremos. este var tambien cambia en el tiemo

// LET-> Es una variable que cambia en el tiempo 

// CONST -> es una variable que no puede cambiar en el tiempo
// el igual 

//TIPOS DE DATOS O INFORMACION QUE PODEMOS ALMACENAR
// 1. numericos con la declaracion LET
let numero = 7;
let texto= "hola mundo"
// 2. buleanos, es un dato que puede ser o verdadero o falso
let esVerdadero = true; //-> verdad 
let esFalso = false; //false -> falso

// 3. arreglos o arrays (en programacion) me permiten almacenar varios datos al mismo tiempo en una variable
let arreglonombres = ["luisa",  "emanuel", "paula", "andres"];
let arregloNumeros = [ 1, 3, 5, 8]
// (parentesis son para invocar o ejecutar acciones o funciones ), {llaves son para declarar objetos}, [corchetes son para declarar arreglos]

//Objetos "son una representacion de elementos de la vida real pero en nuestro codigo" esto puede tener atributos que son caracteristicas de ese objeto

// metodos-> acciones 
const celular= { 
    color:"blanco",
    modelo:"Galaxy A7",
    tamaño:"350p x 300px",
    ancho:350,
    alto:800,
    enviarMensajes: function(){
        //entre los corchetes al lado de los parentesis yo establesco la accion a realizar
        console.log("Mensaje enviado");},
        sumar: function(){
            console.log(5+4);
            function buscarObjeto(){
               console.log("le muestra lo que esta buscando");
        
            }
        
        }

    

}
// metodos acciones que puede realizar el celular
// funcines son las acciones que puede realizar un objeto, acciones que pueden tener en sus sitios web, estas tambien pueden o no recibir datos de entrada con un procesamiento de datos y luego nos devuelve un resultado



function filtrarInformacion (){
    console.log("me muestra información de la depresion");

}

// en la carpeta scripts van todos los archivos de JS pero destinados a darle dinamismo al sitio web no se relacionan con la funcionalida del sitio a nivel del backend

// node js lo utilizamos para poder implementar js en nuestro backend-> son las operaciones logicas que nos permiten el funcionamiento de nuestro sitio web
