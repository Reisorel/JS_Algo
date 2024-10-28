function objectLength(obj) {
  let objLength = 0;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      objLength++;
    }
  }
  return objLength;
}

// One-liner 
const objectLength2 = obj => Object.keys(obj).length;

/* ÉNONCÉ 📚 */

/*
Créez un programme pour déterminer la longueur d'un objet, la longueur étant le nombre de propriétés qu'il contient.
*/

/* Tests à passer 🧪 */

console.log(objectLength({ nom: "Julia", taille: 168, age: 35 })); // 3
console.log(objectLength({ model: 911, marque: "Porsche" })); // 2

console.log(objectLength2({ nom: "Julia", taille: 168, age: 35 })); // 3
console.log(objectLength2({ model: 911, marque: "Porsche" })); // 2
