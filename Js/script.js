let nombre = 'Victor';
let apellido = 'Sánchez';
let usuario_platzi = 'hugo71119';
let edad = 20;
let email = 'hugo71119@gmail.com';
let mayor_edad = true;
let dinero_ahorrado = 289;
let deudas = 89;

let fullName = `Nombre: ${nombre} ${apellido}`;
let TotalAhorrado = `Dinero total ahorrado sin deudas: ${(dinero_ahorrado-deudas)}`;

//Funciones
function user(nombre, apellidos, nickname){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.nickname = nickname;
};

let nuevoUsuario = new user('Carlos', 'Balderas Gonzalez', 'carlos65g');
let printNUser = `Nombre del nuevo usuario: ${nuevoUsuario.nombre} ${nuevoUsuario.apellidos} con nickname '${nuevoUsuario.nickname}'`;

console.log(fullName);
console.log(TotalAhorrado);
console.log(nuevoUsuario);
console.log(printNUser);

//Condicionales
const tipoDeSuscripcion = "sad";

if (tipoDeSuscripcion == 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if (tipoDeSuscripcion == 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
}
else if (tipoDeSuscripcion == 'Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if (tipoDeSuscripcion == 'ExpertPlus'){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//Ciclos

let i = 1;
let j = 10;

while (i <= 5) {
    console.log("El valor de i es: " + i);
    i++;
}
while (j >= 2) {
    console.log("El valor de j es: " + j);
    j--;
}

// let resultado = parseInt(prompt("¿Cuánto es 2 + 2?: "));

let respuesta = 0;
do {
  respuesta = prompt('¿Cual es el resultado de 2 + 2?')
  respuesta *= 1;
} while (respuesta != 4)


//Listas
let lista = ['hola', 'como', 'estas'];
const objetoCarro = {
    marca: 'Bugatti',
    modelo: 'Chiron',
    precio: '1 USD'
};

function array(a) {
    return console.log(a[0]);
}

array(lista);


for (const value of lista) {
    console.log(value);
}

for (const property in objetoCarro) {
    if (Object.hasOwnProperty.call(objetoCarro, property)) {
      const element = objetoCarro[property];
      console.log(element);
    }
}