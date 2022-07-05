// Sort - Modifica el array

const arrayNums = [9, 22, 1, 56, 554, 54, 366];
console.log(arrayNums);

arrayNums.sort((a,b) => {
  if (a < b) {
    return -1; // a is before b return = cualquier valor negativo
  } else if (a > b) {
    return 1; // a is after b return = cualquier valor positivo
  } else {
    return 0; // a === b
  }
});

console.log(arrayNums)

// Ordenar numéricos

const arrNum = [1, 22, 13, 64, 55, 6, 7, 48]

arrNum.sort((a,b) => a - b);

const arrNumInv = [1, 22, 13, 64, 55, 6, 7, 48]
arrNumInv.sort((a,b) => b - a);

console.log(arrNum);
console.log(arrNumInv);

