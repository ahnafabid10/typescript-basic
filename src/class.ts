// oop- class >>>-object

// class Animal {
//     name: string
//     species: string
//     sound: string

//     constructor(name: string, species: string, sound: string){
//         this.name = name
//         this.species = species
//         this.sound = sound
//     }

//     makeSound(){
//         console.log(`${this.name} the animal is making sound ${this.sound}`)
//     }
// }



//parameter properties

class Animal {

    constructor(public name: string,public species: string,public sound: string){
    }

    makeSound(){
        console.log(`${this.name} the animal is making sound ${this.sound}`)
    }
}


const dog = new Animal("dogesh bhai", "dog", "ghew ghew")

const cat = new Animal ("meow0", "cat,","meeww")

console.log(cat.sound)

console.log(dog.name)

cat.makeSound()