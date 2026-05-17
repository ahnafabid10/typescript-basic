class Person{
    getSleep(){
        console.log(`i sleep for 8 hours`)
    }
}

class student extends Person{
    getSleep(){
        console.log(`i am a student. I sleep 7 hours`)
    }
}

class NextLevelDeveloper extends Person{
    getSleep(){
        console.log(`i am Next Level Developer. I sleep for 6 hours`)
    }
}

const getSleepingHours = (param: Person) =>{
    param.getSleep()
}

const person1 = new Person()
const person2 = new student()
const person3 = new NextLevelDeveloper()


getSleepingHours(person2)


class Shape{
    getArea(){
        return 0;
    }
}

class Circle extends Shape{

    radius: number;

    constructor(radius: number){
        super()
        this.radius = radius
    }

    getArea(): number{
        return Math.PI* this.radius * this.radius

    }
}

class Rectangle extends Shape{
    
    height: number;
    width: number;

    constructor(height: number, width: number){
       super()
        this.height = height
        this.width = width
    }


    getArea(): number{
        return this.height * this.width
    }
}

const getArea = (param: Shape) =>{
    console.log(param.getArea())
}

const shape1 = new Shape()
const shape2 = new Circle(10)
const shape3 = new Rectangle(10,20)

getArea(shape1)