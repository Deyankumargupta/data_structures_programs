
const test = require('./test');
function resultObj(array, n) {
    this.array = array;
    this.longestSumSubarray = () => {
        let add = 1;
        for (let i = 0; i < array.length; i++) {

        }
        // return `${start} to ${end}: sum: ${max}`;
    }
}

const test1 = new resultObj([1, 3, 2, 5], 5);
console.log(test1.longestSumSubarray());

console.log(test);
