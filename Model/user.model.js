export default class UserModel{
constructor(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}
static addUser(username,email,password){
    const user=new UserModel(username,email,password);
   users.push(user);
}
static isValidUser(username,password){
    const result=users.find(user => user.username===username && user.password===password);
    return result;
}
}
const users=[new UserModel('sam','admin@gmail.com',1234)];