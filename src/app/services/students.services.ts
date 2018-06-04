import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpParams, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Student } from "../models/student.model";
import { Classroom } from "../models/classroom.model";

const httpOptions: any = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class StudentsServices{   
    private _url = 'https://escolamossman.herokuapp.com/api/aluno/'; 
   
    constructor(private http: Http){}

    getStudents(){
        return this.http
                    .get(this._url)
                    .pipe(
                        map((response => response.json())),
                        retry(2), 
                        catchError((error: HttpErrorResponse) => Observable.throw(this.errorHandler(error)))  
                    );                         
    }

    getStudentById(id: string){ 
        return this.http
                    .get(this._url + id)
                    .pipe(
                        map((response => response.json())),
                        retry(2),
                        catchError((error: HttpErrorResponse) => Observable.throw(this.errorHandler(error))) 
                    );                         
    }

    updateStudent(id: string, student: Student){        
        let values = JSON.stringify(student);

        console.log("** Entrou no service " + id + ' - ' + values);
        return this.http
                    .put(this._url + id, values, httpOptions)
                    .pipe(                       
                        catchError((error: HttpErrorResponse) => Observable.throw(this.errorHandler(error)))                    
                    );
    }

    insertStudent(student: Student){
        let values = JSON.stringify(student);

        console.log("** Entrou no service " + ' - ' + values);
        return this.http
                    .post(this._url, student, httpOptions)
                    .pipe(                        
                        catchError((error: HttpErrorResponse) => Observable.throw(this.errorHandler(error)))                    
                    );
    } 
    
    deleteStudent(id: string){
        console.log("** Entrou no service " + ' - ' + id);        
        return this.http
                    .delete(this._url + id, httpOptions)
                    .pipe(                        
                        catchError((error: HttpErrorResponse) => Observable.throw(this.errorHandler(error)))                    
                    );
    }
    
    errorHandler(error: any): void {
        console.log("Erro na requisição http => " + error)
    }
    
}