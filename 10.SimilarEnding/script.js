function similarEnd(str, end) {
  const firstArg = str.slice(-end.length)
  return firstArg === end ? true : false;
}


const similarEnd2 = (str, end) => str.slice(-end.length) === end ? true : false

/* ÉNONCÉ 📚 */


/*
Créez un algorithme qui vous informe si les lettres du second argument correspondent à la fin du premier argument.
Si elles correspondent, retournez true, sinon false.
*/


/* Test à passer 🧪 */

console.log(similarEnd("ours", "rs"));          // true
console.log(similarEnd("fonction", "zzz"));     // false
console.log(similarEnd("Mario", "io"));         // true

console.log(similarEnd2("ours", "rs"));          // true
console.log(similarEnd2("fonction", "zzz"));     // false
console.log(similarEnd2("Mario", "io"));         // true
