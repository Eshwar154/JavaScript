console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // The reson is that an equality check == and comparison > <>=<= work differently.comparisons convert null to number,treating it as 0.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === strictly check with data type also
console.log("2" === 2);


