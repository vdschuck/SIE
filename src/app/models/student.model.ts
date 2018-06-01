import { Classroom } from "./classroom.model";

export class Student {
    public id : string;
    public name: string;
    public classroom: Classroom[];
    public mother: string;  
    public phone_mother: string; 
    public father: string;    
    public phone_father: string;
    public address: string;

    constructor(id : string, name: string, classroom: Classroom[], mother: string, phone_mother: string, father: string,  phone_father: string, address: string, ){
        this.id = id,
        this.name = name;
        this.mother = mother;
        this.father = father;
        this.phone_mother = phone_mother;
        this.phone_father = phone_father;
        this.address = address;
        this.classroom = classroom;
    }
}