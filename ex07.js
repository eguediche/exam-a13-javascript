function afficherElements(tab) {
    let result = [];
    for (let i = 0; i < tab.length; i++) {
        result.push(tab[i]);
    }
    return result
}

console.log(afficherElements([1, 2, 3, 4])); // Affiche : 1, 2, 3, 4 (un par ligne)
console.log(afficherElements([-1, 28, 44, 0])); // Affiche : -1, 28, 44, 0 (un par ligne)