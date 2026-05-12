"use strict";
// // generic function
Object.defineProperty(exports, "__esModule", { value: true });
// const createArrayWithString = (value: string)=>[value]
// const createArrayWithNumber =(value: number) =>[value]
// const createArrayWithUserObj = (value: {id: number, name: string})=>{
//     return [value]
// }
const createArrayWithGeneric = (value) => {
    return [value];
};
const arrString = createArrayWithGeneric('Apple');
const arrNum = createArrayWithGeneric(222);
const arrObj = createArrayWithGeneric({
    id: 133,
    name: "next Level"
});
// tuple
// const createArrayWithTuple = (param1: string, param2: string)=>[param1, param2]
const createArrayWithTuple = (param1, param2) => [param1, param2];
const createArrayWithTupleGeneric = (param1, param2) => [param1, param2];
const res1 = createArrayWithTupleGeneric('Abis', false);
const res2 = createArrayWithTupleGeneric(222, "Abis");
//
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
const result = addStudentToCourse(student2);
console.log(result);
//# sourceMappingURL=genericFuntion.js.map