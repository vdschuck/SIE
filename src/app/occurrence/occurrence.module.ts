import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from '../app.routing.module';
import { OccurrenceComponent } from './occurrence.component';
import { OccurrenceEditComponent } from './edit/occurrence_edit.component';

@NgModule({
    declarations: [
        OccurrenceComponent,
        OccurrenceEditComponent                        
    ],
    imports: [      
        AppRoutingModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        AppRoutingModule,        
        CommonModule,
        OccurrenceComponent,
        OccurrenceEditComponent                
    ]   
})
export class OccurrenceModule {}