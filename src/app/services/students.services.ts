import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Student } from "../models/student.model";
import { Classroom } from "../models/classroom.model";

@Injectable()
export class StudentsServices
 {   
    private _url = 'https://escolamossman.herokuapp.com/api/aluno'
       
    constructor(private http: Http){}


    getStudents(){
        return this.http
                    .get(this._url)
                    .pipe(map((response => response.json())));                         
    }
}