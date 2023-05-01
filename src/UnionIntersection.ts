type developer = {
    name:string;
};

type JuniorDeveloper = {
    name: string,
    expertise:string,
    experience:number
};

// const newDeveloper: developer | JuniorDeveloper = {
//     name:"imran",
//     expertise:"React"
// };

// Union
type newDeveloper = developer  & {
    expertise: string,
    experience: number;
}
enum Level {
    junior="junior",
    mid="mid",
    senior="senior"
}
type advancedWebDeveloper = newDeveloper &  {
    leadershiExperience:number;
    level:Level
}


const BossDeveloper: advancedWebDeveloper={
    name:"Akkas",
    experience:2,
    expertise:"Html",
    leadershiExperience:1,
    level:Level.junior
}