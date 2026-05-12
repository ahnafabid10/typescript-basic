"use strict";
// function
// arrow function and normal function
Object.defineProperty(exports, "__esModule", { value: true });
function addNumber(num1, num2) {
    return num1 + num2;
}
addNumber(2, 2);
// addNumber(2, "2") // vul kaj korbe nh
const addArrow = (num1, num2) => num1 + num2;
addArrow(2, 2);
// object => function => method
const poorUser = {
    name: 'Abid',
    balance: 0,
    addBalance(value) {
        const totalBalance = this.balance + value;
        return totalBalance;
    }
};
poorUser.addBalance(100000);
const arr = [1, 4, 6];
const sqrArray = arr.map((elem) => elem * elem);
//# sourceMappingURL=function.js.map