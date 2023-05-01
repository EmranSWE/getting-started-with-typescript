const searchName = (value:string | null)=>{
    if(value === null){
        console.log("There is nothing to search")
    }
    else{
        console.log("Searching")
    }
};

searchName(null);

// Unknown Types
const getSpeed = (speed:unknown)=>{
    if(typeof speed=== "number"){
        const convertedSpeed = (speed * 1000)/3600;
        console.log(`My speed is ${convertedSpeed}`)
    }
    if(typeof speed === "string"){
        const [value,unit] =  speed.split(' ');
        const convertedSpeed = (parseFloat(value)  * 1000)/3600;

        console.log(`My speed is ${convertedSpeed}`)
    }
    else{
        console.log(" nothing")
    }
}
getSpeed(12)
getSpeed(' 123 kmh');
getSpeed(true);


//Whenever a function will not return anything i will use it as never types
function throwError (message: string):never
{
    throw new Error (message)
}

throwError("Error hoyece");


  
  