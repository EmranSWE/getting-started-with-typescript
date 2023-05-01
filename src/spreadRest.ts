// Normal Function

//Default parameter always be on the second parts
function addSum (num1:number,num2:number=220):number{
    return num1+num2;
}

addSum(10)
//spread operators

const friends=['ayman','jaman','kaman'];
const newFriends=['monik','jarah'];
friends.push(...newFriends);
//When we destructure data:Not necessary to check their types
const [frnd1]=friends;
console.log(frnd1);

//Rest operators
// const greetingFriends = (fnd1:string,fnd2:string,fnd3:string):void=>{
//     console.log(`Hi ${fnd1} \n Hi ${fnd2} \n Hi ${fnd3}`)
// }

// greetingFriends("imran","sheikh","Masum");

const greetingFriends = (...fnd:string[]):void=>{
    fnd.forEach((fnd)=>console.log(`Hi ${fnd}`))
}

greetingFriends("Imran","Sheikh","Masum","Sumon")