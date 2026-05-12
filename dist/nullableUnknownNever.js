"use strict";
// nullable type3s
Object.defineProperty(exports, "__esModule", { value: true });
const getUser = (input) => {
    if (input) {
        console.log(`input DB": ${input}`);
    }
    else {
        console.log("From DB: ALL User");
    }
};
getUser(null);
// unknown 
const discountCalculator = (input) => {
    if (typeof input === "number") {
        const discountedPrice = input * 0.1;
        console.log(discountedPrice);
    }
    else if (typeof input === "string") {
        const [discountedPrice] = input.split(" ");
        console.log(Number(discountedPrice) * 0.1);
    }
    else {
        console.log("Wrong input");
    }
};
discountCalculator(100);
discountCalculator(`100 Tk`);
discountCalculator(null);
// void
const throwError = (msg) => {
    throw new Error(msg);
};
throwError("Error...");
//# sourceMappingURL=nullableUnknownNever.js.map