import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from '../app.routing.module';
import { StudentsComponent } from './students.component';
import { StudentEditComponent } from './edit/student_edit.component';
import { ClassroomServices } from '../services/classroom.services';

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
    ],
    providers: [
        ClassroomServices
    ]   
})
export class StudentsModule {}