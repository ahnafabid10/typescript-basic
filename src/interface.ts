type User = {
    name: string;
    age: number
}

type Role ={
    role: 'admin' | "user"
}

interface IUser {
    name: string,
    age: number
}

type UserWithRole = User & Role

interface IUserWithRole extends IUser{
    role: 'admin' | 'user'
}

const user1: UserWithRole ={
    name: 'mr. x',
    age: 10,
    role: 'user'
}

const user2: User ={
    name: "Mr. Y",
    age: 32
}

type IsAdmin = boolean

const isAdmin : IsAdmin = false

// function

type Add = (num1: number, num2: number)=> number

interface IAdd {
    (num1: number, num2: number) : number
}

const add : IAdd = (num1, num2) => num1+ num2

type Friends = string[]
const friends: Friends = ['a', 'b', 'c']

interface IFriends{
    [index: number]: string
}