import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Occurrence } from "../models/occurrence.model";

@Injectable()
export class OccurrenceServices{   
    private _url = 'https://escolamossman.herokuapp.com/api/ocorrencia/'; 
    private httpOptions: any;

    constructor(private http: HttpClient) {}

    getOccurrence(){
        return this.http
                    .get(this._url)
                    .pipe(
                        map((response => response)),
                        retry(2), 
                        catchError(error => throwError(error))                    
                    );                         
    }

    getOccurrenceById(id: string){ 
        return this.http
                    .get(this._url + id)
                    .pipe(
                        map((response => response)),
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