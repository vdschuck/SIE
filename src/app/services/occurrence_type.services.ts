import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable, Subject, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpParams, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { OccurrenceType } from "../models/occurrence_type.model";

@Injectable()
export class OccurrenceTypeServices{   
    private _url = 'https://escolamossman.herokuapp.com/api/tipo-ocorrencia/'; 
    private httpOptions: any;

    constructor(private http: Http){             
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                //'Authorization': 'my-auth-token'
              })
        }
    }

    getOccurrenceType(){
        return this.http
                    .get(this._url)
                    .pipe(
                        map((response => response.json())),
                        retry(2), 
                        catchError(error => throwError(error))                    
                    );                         
    }

    getOccurrenceTypeById(id: string){ 
        return this.http
                    .get(this._url + id)
                    .pipe(
                        map((response => response.json())),
                        retry(2),
                        catchError(error => throwError(error))   
                    );                         
    }
   
}