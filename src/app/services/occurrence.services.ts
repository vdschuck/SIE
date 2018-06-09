import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable, Subject, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpParams, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Occurrence } from "../models/occurrence.model";

@Injectable()
export class OccurrenceServices{   
    private _url = 'https://escolamossman.herokuapp.com/api/ocorrencia/'; 
    private httpOptions: any;

    constructor(private http: Http){             
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                //'Authorization': 'my-auth-token'
              })
        }
    }

    getOccurrence(){
        return this.http
                    .get(this._url)
                    .pipe(
                        map((response => response.json())),
                        retry(2), 
                        catchError(error => throwError(error))                    
                    );                         
    }

    getOccurrenceById(id: string){ 
        return this.http
                    .get(this._url + id)
                    .pipe(
                        map((response => response.json())),
                        retry(2),
                        catchError(error => throwError(error))   
                    );                         
    }

    updateOccurrence(id: string, occurrence: Occurrence){        
        let values = JSON.stringify(occurrence);

        console.log("** Entrou no service " + id + ' - ' + values);
        return this.http
                    .put(this._url + id, values, { headers: this.httpOptions })
                    .pipe(                       
                        catchError(error => throwError(error))                      
                    );
    }

    insertOccurrence(occurrence: Occurrence){
        let values = JSON.stringify(occurrence);
        
        console.log("** Entrou no service " + ' - ' + values);
        return this.http
                    .post(this._url, occurrence, { headers: this.httpOptions })
                    .pipe(                        
                        catchError(error => throwError(error))                      
                    );
    } 
    
    deleteOccurrence(id: string){
        console.log("** Entrou no service " + ' - ' + id);        
        return this.http
                    .delete(this._url + id)
                    .pipe(                        
                        catchError(error => throwError(error))                      
                    );
    } 
}