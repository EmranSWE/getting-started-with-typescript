type laptopFeature = {
    name: string,
    price:number,
    category?:string, //optionalTypes
    isAvailable:boolean
}

const laptop1 : laptopFeature = {
    name:"HP PC",
    price:250,
    category:"Good",
    isAvailable:true
}
console.log(laptop1);

const laptop12 : laptopFeature = {
    name:"Lenovo",
    price:250,
    category:"Good",
    isAvailable:true
}

type productName = string;
const product:productName="HP pavilion";

type isAvailable = boolean;
const available:isAvailable=true;

type operationType = (x:number,y:number)=>number;
const calculation = (number1:number,number2:number, operation:operationType) =>{
    return operation(number1,number2)
};

console.log(calculation(10,20,(x,y)=> x+y))
calculation(10,30,(x,y)=> x-y);