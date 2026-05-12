"use strict";
// union  |
Object.defineProperty(exports, "__esModule", { value: true });
const getDashBoard = (role) => {
    if (role === 'admin') {
        return "AdMin dashBoard";
    }
    else if (role === "user") {
        return "user dashBoard";
    }
    else {
        return "guest dashBoard";
    }
};
getDashBoard('guest');
const ChowdhuryShaheb = {
    id: "123",
    name: "Ahnaf Abid",
    phoneNo: "51454",
    designation: 'CTo',
    teamSize: 54
};
//# sourceMappingURL=unionAndIntersection.js.map