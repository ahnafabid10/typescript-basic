type User = {
    id: number,
    name: {
        firstName: string;
        lastName: string
    },
    gender: 'male' | "female",
    contactNo: string,
    address:{
        division: string,
        city: string
    }
}

const user1: User ={
    id: 123,
    name: {
        firstName: 'Mr',
        lastName: 'x'
    },
    gender: 'male',
    contactNo: '65132',
    address:{
        division: 'mym',
        city: "mym"
    }
}
const user2: User ={
    id: 123,
    name: {
        firstName: 'Mr',
        lastName: 'y'
    },
    gender: 'female',
    contactNo: '65132',
    address:{
        division: 'mymen',
        city: "mym1"
    }
}


// function

type AddFunc = (num1: number, num2: number)=> number

const add: AddFunc=(num1, num2)=> num1 + num2;