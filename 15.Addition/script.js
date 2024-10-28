function addition(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr.pop() + addition(arr);
  }
}

// One-liner
const addition3 = arr => arr.length === 1 ? arr[0] : arr.pop() + addition(arr)

// Versio sans la recursion
function boucle(arr2) {
  let result = 0;
  for (let i = 0; i < arr2.length; i++) {
    result += arr2[i];
  }
}

/* ÉNONCÉ 📚 */

/* Créez un algorithme utilisant la récursion pour additionner toutes les valeurs d'un tableau. */

/* Tests à passer 🧪 */

console.log(addition([1, 2, 3, 4, 5, 6])); // 21
console.log(addition([999, 999, 999])); // 2997
console.log(addition([15, 40, 78, 48, 10, 64])); // 255

console.log(addition3([1, 2, 3, 4, 5, 6])); // 21
console.log(addition3([999, 999, 999])); // 2997
console.log(addition3([15, 40, 78, 48, 10, 64])); // 255
