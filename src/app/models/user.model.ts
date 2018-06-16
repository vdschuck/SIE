export class User {
    public _id : string;
    public nome: string;
    public senha: string;  

    constructor(_id : string, nome: string, senha: string ){
        this._id = _id;
        this.nome = nome;
        this.senha = senha; 
    }
}