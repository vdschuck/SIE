import { Injectable } from '@angular/core';
import { Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable, Subject, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpParams, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Student } from "../models/student.model";
import { Classroom } from "../models/classroom.model";
import { AuthService } from '../services/auth.service';

@Injectable()
export class StudentsServices{   
    private _url = 'https://escolamossman.herokuapp.com/api/aluno/'; 
    private httpOptions: any;

    constructor(private http: HttpClient, private authService : AuthService){             
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': this.authService.getToken()
              })
        }
    }

    getStudents(){
        console.log('token' + this.authService.getToken());
        return this.http
                    .get(this._url, this.httpOptions)
                    .pipe(
                        map((response => response)),
                        retry(2), 
                        catchError(error => throwError(error))                                        
                    );      
                   
    }

    getStudentById(id: string){ 
        return this.http
                    .get(this._url + id)
                    .pipe(
                        map((response => response)),
                        retry(2),
                        catchError(error => throwError(error))   
                    );                         
    }

    getStudentByFilter(nome: string, turma: string){ 
        return this.http
                    .get(this._url + '?nome=' + nome + '&turma=' + turma)
                    .pipe(
                        map((response => response)),
                        retry(2),
                        catchError(error => throwError(error))   
                    );                         
    }

    updateStudent(id: string, student: Student){        
        let values = JSON.stringify(student);
        
        return this.http
                    .put(this._url + id, values, { headers: this.httpOptions })
                    .pipe(                       
                        catchError(error => throwError(error))                      
                    );
    }

    insertStudent(student: Student){
        let values = JSON.stringify(student);        
        
        return this.http
                    .post(this._url, student, { headers: this.httpOptions })
                    .pipe(                        
                        catchError(error => throwError(error))                      
                    );
    } 
    
    deleteStudent(id: string){        
        return this.http
                    .delete(this._url + id)
                    .pipe(                        
                        catchError(error => throwError(error))                      
                    );
    } 
}