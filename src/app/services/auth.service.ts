import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { HttpParams, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { User } from "../models/user.model";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
    private _url = 'https://escolamossman.herokuapp.com/api/usuario/entrar';
    private httpOptions: any;

    constructor(private http: Http) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
                //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjFlNGI5N2Y5NjFkMDhhYWYwOTc2NWIiLCJ1c3VhcmlvIjoiZ3VzdGF2byIsInNlbmhhIjoiJDJhJDEwJFRiL05kU25qZWdoZ0pTektaTm1ZYk9WN1NTdkE5OWRibENoR2kzSzU4cjFVUElPdkxrd2ZXIiwiX192IjowLCJpYXQiOjE1MjkxNzIzNDZ9.wX9Q9Dxbgkj38e9Pr0VpcnAu3S0mp2dZaySw--twqqE',   
            })
        }
    }

    singin(user: User) {
        return this.http
            .post(this._url, user, { headers: this.httpOptions })
            .pipe(
                catchError(error => throwError(error))
            );
    }

    logout() {
        localStorage.removeItem('token');
    }

    isAuthenticated() {
        //const jwtHelper = new JwtHelperService();        
        return !!localStorage.getItem('token');
        //return token && !jwtHelper.isTokenExpired(token);
    }

    setToken(token) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    removeToken() {
        localStorage.removeItem('token');
    }
}