function interval(min, max, nb) {
  if (nb >= min && nb <= max) { // Comparaison complète
    return true; // Retourne true si la condition est vraie
  } else {
    return false; // Retourne false sinon
  }
}

const interval2 = (min, max, nb) => nb >= min && nb >= max;


/* ÉNONCÉ 📚 */

/*
  Créez un algorithme qui détermine si le troisième argument passé à la fonction se situe entre les deux premiers.
  Retournez true ou false.
*/

/* Tests à passer 🧪 */

console.log(interval(10, 200, 35)); // true
console.log(interval(444, 555, 1200)); // false
console.log(interval(-100, 0, -50)); // true

console.log(interval2(10, 200, 35)); // true
console.log(interval2(444, 555, 1200)); // false
console.log(interval2(-100, 0, -50)); // true
