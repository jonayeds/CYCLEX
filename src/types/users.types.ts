export type TUser ={
    name:{
        firstName:string,
        middleName?:string,
        lastName:string
    },
    email:string,
    password:string,
    role:"admin"|"customer",
    createdAt:string,
    updatedAt:string,
    _id:string,
    isBlocked:true
}