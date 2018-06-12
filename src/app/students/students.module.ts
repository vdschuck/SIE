import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from '../app.routing.module';
import { StudentsComponent } from './students.component';
import { StudentEditComponent } from './edit/student_edit.component';

@NgModule({
    declarations: [
        StudentsComponent,
        StudentEditComponent        
    ],
    imports: [      
        AppRoutingModule,
        CommonModule,
        FormsModule    
    ],
    exports: [
        AppRoutingModule,        
        CommonModule,
        StudentsComponent, 
        StudentEditComponent       
    ]   
})
export class StudentsModule {}