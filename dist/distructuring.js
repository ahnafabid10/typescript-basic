"use strict";
// object destructuring
// array destructuring
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 123,
    name: {
        firstName: 'Ahnaf',
        middleName: 'Z',
        LastName: 'Abid'
    },
    gender: " male",
    favouriteColor: 'black'
};
const { favouriteColor: myFavouriteColor } = user;
console.log(myFavouriteColor);
//# sourceMappingURL=distructuring.js.map