import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";

import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AuthService]
})
export class LoginComponent implements OnInit {   
     model = new User('', ''); 
     alertMessage: String = null;
     alertClosed: Boolean = false;

    constructor(private router: Router, private authService: AuthService) { }
    
    ngOnInit(): void { 
        this.alertMessage = null;     
    }

    onSubmit(form: NgForm) {
        if (form.valid) {
            this.authService.singin(this.model)
                .subscribe((data) => {
                    this.login(data['token']);
                },
                response => this.alertMessage = response.error['msg']);
        }
    }

    login(token) {                
        AuthService.setToken(token);        
        this.router.navigate(['']);
    }
}
