//as const assertion

//enum

// set of fixed string leteral ek jaigai rakhe

// type UserRoles = "Admin" | "Editor" | "Viewer"

// enum UserRoles{
//     Admin = 'Admin',
//     Editor = "Editor",
//     Viewer = "Viewer"
// }

// const UserRoles = {
//     Admin : 'Admin',
//     Editor : "Editor",
//     Viewer : "Viewer"
// } as const;


const UserRoles = {
    Admin : 'ADMIN',
    Editor : "EDITOR",
    Viewer : "VIEWER"
} as const;

/*
{{
    Admin : 'Admin',
    Editor : "Editor",
    Viewer : "Viewer"
}}
*/


// UserRoles.Admin = "Mon Chasse"

const canEdit = (role:(typeof UserRoles)[keyof typeof UserRoles])=>{
    if(role === UserRoles.Admin || role === UserRoles.Editor) {
        return true
    }
    else{
        return false
    }
}

const isEditPermissable = canEdit(UserRoles.Admin)
console.log(isEditPermissable)