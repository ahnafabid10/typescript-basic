let anything: any

anything = "Abdi";

(anything as string)

const kgToGmConvertor = (input: string | number ): string | number | undefined=>{

    if(typeof input === 'number'){
        return input * 1000;
    } else if(typeof input ==="string"){
        const [value] = input.split(" ")
        return `Converted Out is: ${Number(value)*1000}`
    }
}

const result = kgToGmConvertor(2) as number
console.log(result)
const result2 = kgToGmConvertor("2 kg") as string
console.log(result2)




type CustomError = {
    massage: string;
}

try{

}
catch(err){
    console.log((err as CustomError).massage)
}