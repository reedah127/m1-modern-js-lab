import { users } from "./data";

const findUserById = (id) => {
    const foundUser = users.find(user => user.id === id);

if(!foundUser){
    return "Error: User not found!";
}

const { name, email } = foundUser;
return `User Found: ${name}`;
};

console.log(findUserById(2));
console.log(findUserById(99));