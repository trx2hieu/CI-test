function findMaxAdjacentPairProduct(arr) {
    if (arr.length < 2) {
        return "Array must greater than 2";
    }

    let maxProduct = arr[0] * arr[1];

    for (let i = 1; i < arr.length - 1; i++) {
        const product = arr[i] * arr[i + 1];
        if (product > maxProduct) {
            maxProduct = product;
        }
    }

    return maxProduct;
}

const inputArray = [2, 3, -5, -2, 4];
const maxProduct = findMaxAdjacentPairProduct(inputArray);
console.log(maxProduct);