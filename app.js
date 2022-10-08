"use strict";
//1.1
const yesOrNo = (value) => (value === true && "Yes") || (value === false && "No");
//2.1
const sumOfLowest = (numbers) => numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, b) => a + b, 0);
//2.2
const binarySum = (bins) => bins
    .map((_, i, arr) => arr[i] * 2 ** (arr.length - i - 1))
    .reduce((a, b) => a + b, 0);
//2.3
const findNextSquare = (num) => {
    const root = Math.sqrt(num);
    return root === Math.floor(root) ? (root + 1) ** 2 : -1;
};
//2.4
const findUniq = (numbers) => {
    const first = numbers[0];
    const rest = numbers.slice(1);
    return rest.includes(first) ? rest.find((el) => el !== first) : first;
};
//2.5
const summation = (num) => num === 1 ? 1 : num + summation(num - 1);
//2.6
const centuryFromYear = (num) => Math.ceil(num / 100);
//2.7
const basicOp = (operation, value1, value2) => {
    switch (operation) {
        case "+":
            return value1 + value2;
        case "-":
            return value1 - value2;
        case "*":
            return value1 * value2;
        case "/":
            if (value2 === 0)
                throw new Error("Division to 0 is impossible");
            return value1 / value2;
    }
};
//3.1
const nbYear = (p0, percent, aug, p) => {
    if ((p0 < p && aug < 0) || (p0 > p && aug > 0)) {
        throw new Error("Impossible input for the calculation");
    }
    const nextYearPopulation = p0 + (p0 * percent) / 100 + aug;
    if (nextYearPopulation >= p) {
        return 1;
    }
    return 1 + nbYear(nextYearPopulation, percent, aug, p);
};
//3.2
const getPeopleInBus = (stopsList) => {
    let result = 0;
    for (let i = 0; i < stopsList.length; i++) {
        const stop = stopsList[i];
        if (stop[1] - stop[0] > result ||
            stop[0] < 0 ||
            stop[1] < 0 ||
            (i === 0 && stop[1] > 0)) {
            throw new Error(`The stop data in cell #${i} in Stop-list is wrong`);
        }
        result += stop[0] - stop[1];
    }
    return result;
};
//4.1
const fibonacci = (num) => num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
//4.2
function tribonacci(signature, n) {
    let arr = [];
    if (n === 0)
        return arr;
    for (let i = 0; i < n; i++) {
        arr.push(i < 3 ? signature[i] : arr[i - 1] + arr[i - 2] + arr[i - 3]);
    }
    return arr;
}
//5.1
const myTrim = (str) => str.slice(1, -1);
//5.2
const repeatStr = (str, count) => count === 0 ? "" : str.concat(repeatStr(str, count - 1));
//5.3
const toCamelCase = (str) => {
    const delimitter = str.includes("_") ? "_" : str.includes("-") ? "-" : "";
    return delimitter
        ? str
            .split(delimitter)
            .map((el, i) => (i === 0 ? el : `${el[0].toUpperCase()}${el.slice(1)}`))
            .join("")
        : str;
};
//5.3
const toWeirdCase = (str) => str
    .split(" ")
    .map((word) => word
    .split("")
    .map((ltr, i) => (i % 2 === 0 ? ltr.toUpperCase() : ltr.toLowerCase()))
    .join(""))
    .join(" ");
//5.5
const abbreviate = (str) => {
    const arr = str.split(" ");
    if (arr.length !== 2) {
        throw new Error("Wrong input");
    }
    return `${arr[0].charAt(0).toUpperCase()}.${arr[1].charAt(0).toUpperCase()}`;
};
//5.6
const maskify = (seq) => {
    if (seq.length < 5)
        return seq;
    const maskLength = seq.slice(0, -4).length;
    const toShow = seq.slice(-4);
    return `${repeatStr("#", maskLength)}${toShow}`;
};
//5.7
const shortestLength = (sentence) => Math.min(...sentence.split(" ").map((word) => word.length));
//6.1
const accum = (str) => {
    var _a;
    if (((_a = str.match(/[a-z]/gi)) === null || _a === void 0 ? void 0 : _a.length) !== str.length) {
        throw new Error("Input has non-alphabetical characters");
    }
    return str
        .split("")
        .map((ltr, i) => `${ltr.toUpperCase()}${repeatStr(ltr.toLowerCase(), i)}`)
        .join("-");
};
//6.2
const duplicatesCounter = (str) => {
    let duplicatesQty = 0;
    const letters = str.toLowerCase().split("");
    const uniqueLetters = [...new Set(letters)];
    for (const letter of uniqueLetters) {
        str.indexOf(letter) !== str.lastIndexOf(letter) && duplicatesQty++;
    }
    return duplicatesQty;
};
//6.3
const longest = (s1, s2) => {
    const repeated = s1
        .concat(s2)
        .split("")
        .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    return [...new Set(repeated)].join("");
};
//6.4
const isIsogram = (str) => str.match(/[^a-z]/gi) === null && duplicatesCounter(str) === 0;
//7
const myFilter = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]) && (result[result.length] = arr[i]);
    }
    return result;
};
const myMap = (arr, mappingFunc) => {
    const mapResult = [];
    for (let i = 0; i < arr.length; i++) {
        mapResult[mapResult.length] = mappingFunc(arr[i], i, arr);
    }
    return mapResult;
};
//hr1
const solveMeFirst = (a, b) => a + b;
//hr2
const findPerimeter = (len, width) => {
    if (len <= 0 || width <= 0) {
        throw new Error("Wrong dimensions!");
    }
    return 2 * (len + width);
};
//hr3
const t = [1, 3, 5, 5, 6, 7];
const linearSearch = (arr, el) => arr.indexOf(el);
const binarySearch = (arr, el) => {
    const binSearch = (arr, el) => {
        if (arr.length === 1) {
            return el === arr[0];
        }
        const midIndex = Math.floor(arr.length / 2);
        return arr[midIndex] > el
            ? binSearch(arr.slice(0, midIndex), el)
            : binSearch(arr.slice(midIndex), el);
    };
    const result = binSearch(arr, el);
    return `Element ${result ? "" : "not"} found!`;
};
