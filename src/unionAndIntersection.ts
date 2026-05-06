// union  |

type userRole = "admin" | "user" | "guest"

const getDashBoard = (role: userRole) =>{

    if(role === 'admin'){
        return "AdMin dashBoard"
    }
    else if(role === "user"){
        return "user dashBoard"
    }
    else{
        return "guest dashBoard"
    }

}

getDashBoard('guest')

// intersection & 

type Employee = {
    id: string,
    name: string,
    phoneNo: string
}

type Manager = {
    designation:string;
    teamSize: number
}

type EmployeeManager = Employee & Manager

const ChowdhuryShaheb: EmployeeManager ={
    id: "123",
    name: "Ahnaf Abid",
    phoneNo: "51454",
    designation: 'CTo',
    teamSize: 54

}