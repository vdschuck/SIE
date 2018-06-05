import { Student } from "./student.model";
import { OccurrenceType } from "./occurrence_type.model";

export class Occurrence {
    public id : string;
    public aluno : Student;
    public data : string; 
    public resumo : string;
    public tipoOcorrencia : OccurrenceType;
    public detalhes : string;


    constructor(id: string, aluno: Student, data: string, resumo: string, tipoOcorrencia: OccurrenceType, detalhes: string){
        this.id = id;
        this.aluno = aluno;
        this.data = data;
        this.resumo = resumo;
        this.tipoOcorrencia = tipoOcorrencia;
        this.detalhes = detalhes;         
    }
}