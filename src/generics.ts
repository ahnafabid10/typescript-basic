// dynamically generalize: Generic

type GenericArray<value>  =Array<value>

// const friends: string[] = ['x', 'y', 'z']
const friends: GenericArray<string> = ['x', 'y', 'z']

// const rollNumbers: number[] = [4,7,11]
const rollNumbers: GenericArray<number> = [4,7,11]

// const isEligibleList: boolean[] =[true , false, true]
const isEligibleList: GenericArray<boolean> =[true , false, true]

type User = {
    name: string; age: number
}


const userList: GenericArray<User> = [
    {
        name: 'Mr.x ',
        age: 22
    },
    {
        name: 'Mr. Y',
        age: 21
    },
]


const sqrFunc = (value: number)=>{
    return value * value
}
sqrFunc(8)

type Coordinates<X,Y> = [X,Y]

const coordinates1: Coordinates<number, number> =[20,30]
const coordinates2: Coordinates<string, string> =['20','30']

