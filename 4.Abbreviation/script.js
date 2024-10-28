function abreviation(str) {
  const splitlNames = str.split(" ")
  return `${splitlNames[0]} ${splitlNames[1].charAt(0)}.`
}

const abreviation2 = str => `${str.split(" ")[0]} ${str.split(" ")[1].charAt(0)}.`;


/* ÉNONCÉ 📚 */


/* Créez un algorithme qui retourne l'abréviation d'un nom et prénom. */


/* Tests à passer 🧪 */

console.log(abreviation("John Doe"));           // John D.
console.log(abreviation("Romy Schneider"));     // Romy S.
console.log(abreviation("Alfred Hitchcock"));   // Alfred H.

console.log(abreviation2("John Doe"));           // John D.
console.log(abreviation2("Romy Schneider"));     // Romy S.
console.log(abreviation2("Alfred Hitchcock"));   // Alfred H.
