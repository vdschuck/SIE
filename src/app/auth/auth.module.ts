import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from '../app.routing.module';
import { LoginComponent } from './login/login.component';

import { AuthService } from '../services/auth.service';

@NgModule({
    declarations: [
      LoginComponent                     
    ],
    imports: [      
      AppRoutingModule,
      CommonModule,
      FormsModule
    ],
    exports: [
      AppRoutingModule,        
      CommonModule       
    ],
    providers: [
      AuthService
    ]
})
export class AuthModule {}