import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Classroom } from "../models/classroom.model";

@Injectable()
export class ClassroomServices {
    private _url = 'https://escolamossman.herokuapp.com/api/turma/';

    constructor(private http: HttpClient) {
    }

    getClassroom() {
        return this.http
            .get(this._url)
            .pipe(
                map((response => response)),
                retry(2),
                catchError(error => throwError(error))
            );
    }

    getClassroomById(id: string) {
        return this.http
            .get(this._url + id)
            .pipe(
                map((response => response)),
                retry(2),
                catchError(error => throwError(error))
            );
    }

    updateClassroom(id: string, classroom: Classroom) {
        return this.http
            .put(this._url + id, classroom)
            .pipe(
                catchError(error => throwError(error))
            );
    }

    insertClassroom(classroom: Classroom) { 
        return this.http
            .post(this._url, classroom)
            .pipe(
                catchError(error => throwError(error))
            );
    }

    deleteClassroom(id: string) {
        return this.http
            .delete(this._url + id)
            .pipe(
                catchError(error => throwError(error))
            );
    }
}