class Parent {
name: string;
    age: number;
    address: string;

    constructor(name: string, age: number,address: string ){
        this.name  = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numOfHours: number){
        console.log(`${this.name} ${numOfHours} ghonta ghumai`)
    }
}

class Student extends Parent {
    rollNo: number

    constructor(name: string, age: number, address: string, rollNo: number){

    super(name, age, address)
    this.rollNo = rollNo
}
}

const student1 = new Student(`Mr. Fakir`, 18, "BAngladesh", 1435)

student1.getSleep(15)


//

class Teacher extends Parent {
    designation: string;

    constructor(name:string, age: number, address: string,designation: string ){
        super(name, age, address)
        this.designation = designation
    }

    takeClass(numOfClass: number){
        console.log(`${this.name} ${numOfClass} ghonta class nei`)
    }

}

const teacher1 = new Teacher("Akkas", 15, "BD", "Teacher")

teacher1.takeClass(13)