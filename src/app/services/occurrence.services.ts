import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Occurrence } from "../models/occurrence.model";

@Injectable()
export class OccurrenceServices {
    private _url = 'https://escolamossman.herokuapp.com/api/ocorrencia/';

    constructor(private http: HttpClient) { }

    getOccurrence() {
        return this.http
            .get(this._url)
            .pipe(
                map((response => response)),
                retry(2),
                catchError(error => throwError(error))
            );
    }

    getOccurrenceById(id: string) {
        return this.http
            .get(this._url + id)
            .pipe(
                map((response => response)),
                retry(2),
                catchError(error => throwError(error))
            );
    }

    updateOccurrence(id: string, occurrence: Occurrence) {  
        return this.http
            .put(this._url + id, occurrence)
            .pipe(
                catchError(error => throwError(error))
            );
    }

    insertOccurrence(occurrence: Occurrence) { 
        return this.http
            .post(this._url, occurrence)
            .pipe(
                catchError(error => throwError(error))
            );
    }

    deleteOccurrence(id: string) {
        return this.http
            .delete(this._url + id)
            .pipe(
                catchError(error => throwError(error))
            );
    }
}