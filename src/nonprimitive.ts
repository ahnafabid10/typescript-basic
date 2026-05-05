// array , object

// ts- tuple

let bazarList: string[] = ['eggs', 'milk','sugar' ]

// bazarList.push(12)// kaj korbe nh

let mixedArr: (string | number)[] = ['eggs', 12, 'milk', 1, 'sugar', 2]

mixedArr.push('apple', 13)

let coordinates: [number, number] = [20,30]

let couple: [string, string] = [ 'husband', 'wife']

let nameAndRoll: [string, number] = ['Abid', 79]

// nameAndRoll[0] = 79 //hbe nh

let destination: [string, string, number] = [ 'dhaka', 'chattogram', 300]

// const user:{
//     organization: "Not Found", //value => type: literal types
//     firstName: string,
//     middleName?:string,
//     lastName: string,
//     isMarried: boolean
// } = {
//     organization: 'Not Found',
//     firstName: 'Ahnaf',
//     middleName: 'something',
//     lastName: 'Abid',
//     isMarried: false // when true???
// }

// user.organization = 'haray gese' //not possible to change

const user:{
    readonly organization: string, //access modifier
    firstName: string,
    middleName?:string,
    lastName: string,
    isMarried: boolean
} = {
    organization: 'Not Found',
    firstName: 'Ahnaf',
    middleName: 'something',
    lastName: 'Abid',
    isMarried: false // when true???
}

// user.organization = 'haray gese'

console.log(user)