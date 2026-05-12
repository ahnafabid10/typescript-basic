"use strict";
// keyof: type operator
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 222,
    name: "Abid",
    address: {
        city: "ctg",
    }
};
// const myId = user.id;
const myId = user['id'];
const myName = user["name"];
const address = user['address'];
// console.log({myId, myName, address})
const getPropertyObj = (obj, key) => {
    return obj[key];
};
const result1 = getPropertyObj(user, "name");
console.log(result1);
const product = {
    brand: 'HP',
};
const student = {
    id: 123,
    class: "four"
};
const result2 = getPropertyObj(product, "brand");
console.log(result2);
const result3 = getPropertyObj(student, "class");
console.log(result3);
//# sourceMappingURL=keyOfConstraint.js.map