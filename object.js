// In Javascript e' possibile assegnare ad una variabile/costante un valore tra i tipi primitivi: string, number, undefined, null...

// qualsiasi valore NON PRIMITIVO non entra a far parte della famiglia degli OGGETTI
 
// copia re una NON PRIMITIVA  ci fara copiare solamente la sua REFERENZA (indirizzo in memoria)

//  un oggetto e' un gruppo di proprieta e metodi delimitati da parentesi graffe {}
//  al suo interno puo contenere un numero potenzialmente illimitato di  coppie chiave-valore

const obj = {}; // <-- sto dichiarando un oggetto vuoto con NOTAZIONE LETTERALE
console.log(obj.__proto__); // Object
console.log(obj.__proto__.__proto__); // null

const str = "Epicode"
console.dir(str.__proto__) // String
console.dir(str.__proto__.__proto__) // Object
console.dir(str.__proto__.__proto__.__proto__) // null

const array = []
console.dir(str.__proto__) // Array
console.dir(str.__proto__.__proto__) // Object
console.dir(str.__proto__.__proto__.__proto__) // null







