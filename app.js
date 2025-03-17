//Declarar una variable que será un array vacío 
// (se almacenará información)

let amigo = [] 
//Crear una función para el input
function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value ;
 //Validar que el input no esté vacío
    if(nombreAmigo === ""){
        alert("Por favor, ingresa un nombre de humano");
        return;
    }
 //Agregar el valor del input al array   
    amigo.push(nombreAmigo);
//Limpiar el input
    inputAmigo.value = ""
    inputAmigo.focus(); 
//Funcion para mostrar amigos
    sumarAmigos();
}
//Mostrar a los amigos por medio de una función
function sumarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; //limpiar la lista 

    for (let i = 0; i < amigo.length; i++){ //recorrer el array
        let item = document.createElement("li"); 
        item.textContent = amigo[i]; //agregar el nombre del amigo
        listaAmigos.appendChild(item); //agregar el item a la lista
}
}
//Eliminar amigos
function sortearAmigo(){
    if(amigo.length === 0){
        alert("No hay humanos qué sortear");
        return;
    }
    let amigoSorteado = [Math.floor(Math.random() * amigo.length)] //sortear un amigo aleatorio por medio de un numero aleatorio y la longitud del array  
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigo[amigoSorteado]}`;
    
}