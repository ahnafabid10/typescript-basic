// function
// arrow function and normal function

function addNumber(num1 : number, num2: number): number
{
    return num1 +  num2;
}
addNumber(2,2)
// addNumber(2, "2") // vul kaj korbe nh

const addArrow = (num1 : number, num2: number)=> num1+ num2

addArrow(2,2)

// object => function => method

const poorUser = {
    name: 'Abid',
    balance: 0,
    addBalance(value: number): number{
      const totalBalance = this.balance + value
      return totalBalance;
    }
}

poorUser.addBalance(100000)

const arr: number[] =[1,4,6]

const sqrArray = arr.map((elem: number): number=>elem * elem)


