// mapped types

// map

const arrayOfNum : Number[] = [1,4,6];

const arrayOfString: string[] = ["1","4","6"]

const arrayOfStringUsingMap: string[] = 
arrayOfNum.map((num)=> num.toString())

console.log(arrayOfStringUsingMap)

const user ={
    id: 222
}

user['id']

type AreaOfNum = {
    height: number;
    width: number;
}


type height = AreaOfNum["height"]

// type AreaOfString = {
//     height: number;
//     width: number;
// }

type Area<T> = {
    [key in keyof T]: T[key];
}


const area1: Area<{height: string; width: string}> = {
    height: "31",
    width: "31"
}

