class Person {
    name: string;

    constructor(name: string){
        this.name = name
    }

    getSleep(numOfHours: number){
    console.log(`${this.name} doinik ${numOfHours} ghonta ghumai`)
}
}

class Student extends Person{
    constructor(name:string){
        super(name);
    }

    doStudy(numOfHours: number){
        console.log(`${this.name} doing ${numOfHours} ghonta study kore`)
    }

}

class Teacher extends Person{
    constructor(name: string){
        super(name)
    }

    takeClass(numOfHours: number){
        console.log(`${this.name} doing ${numOfHours} ghonta class nei`)
    }
}

const getUserInfo = (user: Person)=>{
    if(user instanceof Student){
        user.doStudy(10)
    }else if(user instanceof Teacher){
        user.takeClass(5)
    } else{
        user.getSleep(15)
    }

}

const student1 = new Student("Mr. Student")
const teacher1 = new Teacher("Mr. Teacher")


getUserInfo(student1)
getUserInfo(teacher1)


// function guard

const isStudent = (user: Person) =>{
    return user instanceof Student; // true false
}

const isTeacher = (user: Person)=>{
    return user instanceof Teacher; // user is teacher
}