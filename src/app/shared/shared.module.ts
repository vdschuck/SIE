import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "../app.routing.module";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { DropdownDirective } from "./utils/dropdown.directive";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        DropdownDirective
    ],
    imports: [      
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        CommonModule,
        HeaderComponent,        
        DropdownDirective
    ]   
})
export class SharedModule {}