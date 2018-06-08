import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from '../app.routing.module';
import { ClassroomComponent } from './classroom.component';
import { ClassroomEditComponent } from './edit/classroom_edit.component';


@NgModule({
    declarations: [
        ClassroomComponent,
        ClassroomEditComponent                
    ],
    imports: [      
        AppRoutingModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        AppRoutingModule,        
        CommonModule,
        ClassroomComponent,
        ClassroomEditComponent          
    ]   
})
export class ClassroomModule {}