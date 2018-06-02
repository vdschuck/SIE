import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpParams, HttpClient } from '@angular/common/http';

import { Student } from "../models/student.model";
import { Classroom } from "../models/classroom.model";

@Injectable()
export class StudentsServices{   
    private _url = 'https://escolamossman.herokuapp.com/api/aluno/'
    
    constructor(private http: Http){}

    getStudents(){
        return this.http
                    .get(this._url)
                    .pipe(map((response => response.json())));                         
    }

    getStudentById(id: string){
        //let params = new HttpParams();
        //params = params.append('id', id);
        
        return this.http
                    .get(this._url +  id)
                    .pipe(map((response => response.json())));                         
    }
}