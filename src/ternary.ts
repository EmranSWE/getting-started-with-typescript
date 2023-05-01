// const price:number=1000
// const isYouCanBuy = price>=1200 ? "You can buy":"Not is your food";
// console.log(isYouCanBuy);


// // Nullish coeslanceing operators; =>null,undefined
// const isAuthenticateUser = undefined;
// const userName = isAuthenticateUser ?? "Guest";
// const userName2 = isAuthenticateUser ? isAuthenticateUser : "Guest";

// console.table(userName2);

// type Manush = {
//     name: string;
//     age:number;
//     address:{
//         city:string,
//         road:string,
//         home?:""
//     }
// };
// const manush:Manush={
//     name:"Imran",
//     age:20,
//     address:{
//         city:"Dhaka",
//         road:"Dhaka",

//     }
// }

// const home=manush.address.home ?? "No home";
// console.log(home);


function generateAdder(a: number): (b: number) => number {
    return function(b: number) {
      return a + b;
    };
  
  }
  
  const addTwo = generateAdder(2);
  
  console.log(addTwo(3));
  
  console.log(addTwo(5));