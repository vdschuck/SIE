import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "../app.routing.module";
import { StudentsComponent } from "./students.component";

@NgModule({
    declarations: [
        StudentsComponent        
    ],
    imports: [      
        AppRoutingModule,
        CommonModule
    ],
    exports: [
        AppRoutingModule,        
        CommonModule,
        StudentsComponent,        
    ]   
})
export class StudentsModule {}