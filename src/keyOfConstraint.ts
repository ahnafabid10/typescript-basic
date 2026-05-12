// keyof: type operator

type RichPeoplesVehicle = {
    car: string;
    bike: string;
    cng: string;
}

type MyVehicle1 = "bike" | "car" | "cng"
type MyVehicle2  =keyof RichPeoplesVehicle

// const myVehicle: MyVehicle2 = "bike2"

type User = {
    id: number;
    name: string;
    address: {
        city: string;
    }
}

const user: User = {
    id: 222,
    name: "Abid",
    address: {
        city: "ctg",
    }
}

// const myId = user.id;
const myId = user['id'];
const myName = user["name"];
const address = user['address']

// console.log({myId, myName, address})

const getPropertyObj = <T>(obj: T, key: keyof T)=>{
    return obj[key]
}


const result1 = getPropertyObj(user, "name")
console.log(result1)

const product = {
    brand: 'HP',
}

const student = {
    id: 123,
    class: "four"
}

const result2 = getPropertyObj(product, "brand")
console.log(result2)

const result3 = getPropertyObj(student, "class")
console.log(result3)