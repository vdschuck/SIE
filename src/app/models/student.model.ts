import { Classroom } from "./classroom.model";

export class Student {
    public _id : string;
    public nome: string;
    public turma: Classroom[];
    public nomeMae: string;  
    public telefoneMae: string; 
    public nomePai: string;    
    public telefonePai: string;
    public endereco: string;

    constructor(_id : string, nome: string, turma: Classroom[], nomeMae: string, telefoneMae: string, nomePai: string,  telefonePai: string, endereco: string, ){
        this._id = _id,
        this.nome = nome;
        this.nomeMae = nomeMae;
        this.nomePai = nomePai;
        this.telefoneMae = telefoneMae;
        this.telefonePai = telefonePai;
        this.endereco = endereco;
        this.turma = turma;
    }
}