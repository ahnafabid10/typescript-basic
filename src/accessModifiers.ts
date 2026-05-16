// access >> modify

class BankAccount {
    public readonly userId: number;
    public username: string;
    protected userBalance: number;

    constructor (userId: number, userName: string, userBalance: number){
        this.userId = userId
        this.username = userName
        this.userBalance = userBalance
    }

    private addBalance(balance: number){
        this.userBalance = this.userBalance + balance
    }

}

class StudentBankAccount extends BankAccount{
    test(){
        this.userBalance
    }
}


const abidBahiAccount = new BankAccount(111, "Abid", 321 )

// abidBahiAccount.userId = 222 >>> not possible to change

// abidBahiAccount.userBalance = 100 >>> not possible to access in private



console.log(abidBahiAccount)