function twoSum(array, target) {
    const numIndices = [];
    // On va retourner result pas numIndices sinon ça donne pas 1 liste
    const result = [];
    for (let i = 0; i < array.length; i++) {
        
        const complement = target - array[i];

        if (numIndices[complement] !== undefined) {
            result.push(
                numIndices[complement], 
                i
            )
            return result;
        }
        numIndices[array[i]] = i;
    }
    return null;
}

// Appel avec l'exemple
const array = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(array, target)); 


// Appel avec d'autres valeurs
const array_1 = [8, 66, 87, 85, 14, 33, 94, 31, 9, 7];
const target_1 = 23;
console.log(twoSum(array_1, target_1)); 