"use strict";
// ? : ternary operator : decision marking
// ?? : nullish coalescing operator
// ? . optional chaining
Object.defineProperty(exports, "__esModule", { value: true });
const userAge = 21;
const biyerJonnoEligable = (age) => {
    // if(age >=21){
    //     console.log('You are eligible')
    // }
    // else{
    //     console.log("Your are not eligible")
    // }
    const result = age >= 21 ? "Your are eligible" : "Your are not eligible";
    console.log(result);
    return result;
};
biyerJonnoEligable(21);
// const userTheme = undefined;
const userTheme = null;
const selectedTheme = userTheme ?? "Light theme";
console.log(selectedTheme);
const isAuthenticated = null;
const resultWithTernary = isAuthenticated ? isAuthenticated : "you're guest !";
const resultWithNulish = isAuthenticated ?? "Your are Guest !";
console.log({ resultWithNulish }, { resultWithTernary });
// optional chaining
const user = {
    address: {
        city: "Dhaka",
        town: "banani",
    }
};
const postalCode = user?.address?.postCode;
console.log(postalCode);
//# sourceMappingURL=questionMark.js.map