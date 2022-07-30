
class User {
    constructor(username , age , collage){
        this.user = username;
        this.age = age;
        this.collage = collage;
    }
}
let myUser = new User("ibrahim" , 25 , "CS");
console.log(`Username = ${myUser.user} And Age = ${myUser.age} And Collage = ${myUser.collage}`);