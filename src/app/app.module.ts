import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './shared/shared.module';
import { StudentsModule } from './students/students.module';
import { ClassroomModule } from './classroom/classroom.module';
import { OccurrenceModule } from './occurrence/occurrence.module';
import { AuthModule } from './auth/auth.module';

import { AuthGuardService as AuthGuard } from './services/auth_guard.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    ModalModule.forRoot(),    
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: AuthService.getToken,
        whitelistedDomains: ['escolamossman.herokuapp.com']
      }
    }),
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StudentsModule,
    ClassroomModule,
    OccurrenceModule,
    AuthModule,
    
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
