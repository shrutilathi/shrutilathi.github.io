export const addUser=(items)=>{
    return{
        type:"ADD",
        payload:{
        newItem:items
        }
    }
}
export const deleteUser=(id)=>{
    return{
        type:"DELETE",
        payload:id
    }
}
export const editUser=(items)=>{
    return{
        type:"EDIT",
        payload:items
    }
}
