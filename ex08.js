function multiplierParDeux(tab) {
    let result = [];
    for (let i = 0; i < tab.length; i++) {
        result.push(tab[i] * 2)
    }
    return result;
}
console.log(multiplierParDeux([1, 2, 3])); // Résultat attendu : [2, 4, 6]