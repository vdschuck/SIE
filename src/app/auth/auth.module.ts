import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from '../app.routing.module';
import { SigninComponent } from './sign_in.component';

import { AuthService } from '../services/auth.service';

@NgModule({
    declarations: [
      SigninComponent                     
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
export class SigninModule {}