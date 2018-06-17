import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { StudentsComponent } from './students/students.component';
import { StudentEditComponent } from './students/edit/student_edit.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { ClassroomEditComponent } from './classroom/edit/classroom_edit.component';
import { OccurrenceComponent } from './occurrence/occurrence.component';
import { OccurrenceEditComponent } from './occurrence/edit/occurrence_edit.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService as AuthGuard } from './services/auth_guard.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },  
    { path: 'entrar', component: LoginComponent },
    { path: 'alunos', component: StudentsComponent, canActivate: [AuthGuard] },
    { path: 'alunos/editar/:id', component: StudentEditComponent, canActivate: [AuthGuard] },
    { path: 'alunos/novo', component: StudentEditComponent, canActivate: [AuthGuard] },
    { path: 'turmas', component: ClassroomComponent, canActivate: [AuthGuard] },
    { path: 'turmas/nova', component: ClassroomEditComponent, canActivate: [AuthGuard] },
    { path: 'ocorrencias', component: OccurrenceComponent, canActivate: [AuthGuard] },
    { path: 'ocorrencias/editar/:id', component: OccurrenceEditComponent, canActivate: [AuthGuard]},
    { path: 'ocorrencias/nova', component: OccurrenceEditComponent, canActivate: [AuthGuard]},
    // This route always last
    { path: '**', component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
    // EnableTracing shows all logs in the console
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, enableTracing: false })],
    exports: [RouterModule],
    providers: [ AuthGuard ]
})

export class AppRoutingModule {}