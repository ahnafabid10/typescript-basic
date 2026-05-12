"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
anything = "Abdi";
anything;
const kgToGmConvertor = (input) => {
    if (typeof input === 'number') {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `Converted Out is: ${Number(value) * 1000}`;
    }
};
const result = kgToGmConvertor(2);
console.log(result);
const result2 = kgToGmConvertor("2 kg");
console.log(result2);
try {
}
catch (err) {
    console.log(err.massage);
}
//# sourceMappingURL=typeAssertion.js.map