function capitalize(str) {
  const lowerCaseArray = str.toLowerCase().split(" ")
  const result = lowerCaseArray.map(word => {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase())
  })
  return result.join(" ")
}

const capitalize2 = str => str.toLowerCase().split(" ").map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase())).join(" ")

/* ÉNONCÉ 📚 */


/*
Créez un Algorithme qui prend une phrase en argument et qui retourne cette même phrase avec la première lettre de chaque mot en majuscule.
*/


/* Test à passer 🧪 */

console.log(capitalize("Les sanglots longs des violons de l'automne...")); // Les Sanglots Longs Des Violons De L'automne...
console.log(capitalize2("Les sanglots longs des violons de l'automne...")); // Les Sanglots Longs Des Violons De L'automne...
