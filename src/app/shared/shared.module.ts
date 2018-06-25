import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from '../app.routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        FilterPipe                
    ],
    imports: [      
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        CommonModule,
        HeaderComponent,
        FilterPipe        
    ]   
})
export class SharedModule {}