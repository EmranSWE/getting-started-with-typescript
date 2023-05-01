// Normal Function
function addSum1 (num1:number,num2:number):number{
    return num1+num2;
}

const arrowSum = (num11:number,num22:number):number=> {return num11+num22};

const person:{
    name:string;
    age:number;
    getAddress:(money:number);
} ={
    name:"Imran",
    age:25,
    getAddress(money:number){
        return this.age+money
    }
}