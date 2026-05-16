class BankAccount {
    public readonly userId: number;
    public username: string;
    private _userBalance: number;

    constructor (userId: number, userName: string, userBalance: number){
        this.userId = userId
        this.username = userName
        this._userBalance = userBalance
    }

    // balance k set kortase
    // addBalance(balance: number){
    //     this._userBalance = this._userBalance + balance
    // }

    //setter use kore korte cay

    set addBalance(amount: number){
        this._userBalance = this._userBalance + amount
    }

//     getBalance(){
//     return this._userBalance;
// }


//getter use
get getBalance(){
    return this._userBalance
}

}




const abidBhaiAccount = new BankAccount(111, "Abid", 321 )
// abidBhaiAccount.addBalance(100) //function call jorte hocche
// abidBhaiAccount.addBalance(60) // function call korte hosse
// console.log(abidBhaiAccount.getBalance())

// abidBhaiAccount.getBalance


abidBhaiAccount.addBalance = 100;