import { Student } from "./student.model";
import { OccurrenceType } from "./occurrence_type.model";
import { Classroom } from "./classroom.model";

export class Occurrence {
    public _id : string;
    public aluno : Student;
    public data : string; 
    public resumo : string;
    public tipoOcorrencia : OccurrenceType;
    public detalhes : string;
    public turma: Classroom;


    constructor(_id: string, aluno: Student, data: string, resumo: string, tipoOcorrencia: OccurrenceType, detalhes: string, turma: Classroom){
        this._id = _id;
        this.aluno = aluno;
        this.data = data;
        this.resumo = resumo;
        this.tipoOcorrencia = tipoOcorrencia;
        this.detalhes = detalhes;   
        this.turma= turma;      
    }
}