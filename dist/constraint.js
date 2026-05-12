"use strict";
// constrain: strict rules deya
Object.defineProperty(exports, "__esModule", { value: true });
const addStudentToCourse = (studentInfo) => {
    return {
        course: 'Next Level',
        ...studentInfo
    };
};
const student1 = {
    id: 123,
    name: 'Abis',
    hasPen: true
};
const student2 = {
    id: 523,
    name: 'bids',
    hasCar: true,
    isMarried: true
};
const student3 = {
    id: 32,
    name: 'Vibu',
    handWatch: true,
    dateOfBirth: "20-10-200",
    class: "3"
};
const result = addStudentToCourse(student3);
console.log(result);
//# sourceMappingURL=constraint.js.map