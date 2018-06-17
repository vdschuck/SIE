import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { OccurrenceType } from "../models/occurrence_type.model";

@Injectable()
export class OccurrenceTypeServices{   
    private _url = 'https://escolamossman.herokuapp.com/api/tipo-ocorrencia/';     

    constructor(private http: HttpClient) {}

    getOccurrenceType(){
        return this.http
                    .get(this._url)
                    .pipe(
                        map((response => response)),
                        retry(2), 
                        catchError(error => throwError(error))                    
                    );                         
    }

    getOccurrenceTypeById(id: string){ 
        return this.http
                    .get(this._url + id)
                    .pipe(
                        map((response => response)),
                        retry(2),
                        catchError(error => throwError(error))   
                    );                         
    }
   
}