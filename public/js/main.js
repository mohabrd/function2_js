//EXO1
// function reverseNumber(nombre) {
//     return nombre.toString().split('').reverse().join('')
    
// }

// console.log(reverseNumber(583));

//EXO2
function divPar2(nombre) {
    switch (nombre % 2) {
        case 0:
        return `Le numéro ${nombre} est divisible par 2 : ${nombre} / 2 = ${nombre / 2}`;

        default:
        return `Ce nombre n'est pas divisible par 2`;
    }
}

console.log(divPar2(14));
console.log(divPar2(15));