import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {
    
    constructor(private router: Router) {}

    logout(){
        AuthService.logout();
        this.router.navigate(['entrar']);
    }

}