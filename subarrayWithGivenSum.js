function resultObj(n, s, array) {
    this.n = n;
    this.s = s;
    this.array = array;
    this.findSubarrayForSum = () => {
        for (let i = 0; i < array.length; i++) {
            let sum = array[i];
            for (let j = i + 1; j < array.length; j++) {
                sum = sum + array[j]
                if (sum == s) {
                    return `${i+1} to ${j+1}`;
                }
            }
        }
    }
}

const test1 = new resultObj(5, 12, [1, 2, 3, 7, 5]);
console.log(test1.findSubarrayForSum());

const test2 = new resultObj(10, 15, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(test2.findSubarrayForSum());
