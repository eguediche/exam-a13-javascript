function longueursMots(mots) {
    let result = [];
	for (let i = 0; i < mots.length; i++) {
       result.push(mots[i].length);
    }
    return result;
}
console.log(longueursMots(["chat", "éléphant", "lion"])); // Résultat attendu : [4, 8, 4]