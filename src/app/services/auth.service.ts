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

    constructor(private http: HttpClient) {}

    singin(user: User) {
        return this.http
            .post(this._url, user)
            .pipe(
                map(response => response),
                catchError(error => throwError(error))
            );
    }

    static logout() {
        this.removeToken();        
    }

    static isAuthenticated() {
        const jwtHelper = new JwtHelperService();        
        const token = localStorage.getItem('token');
        return token && !jwtHelper.isTokenExpired(token);
    }

    static setToken(token) {
        localStorage.setItem('token', token);
    }

    static getToken() : string {        
        return localStorage.getItem('token');
    }

    static removeToken() {
        localStorage.removeItem('token');
    }
}