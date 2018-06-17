import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { StudentsComponent } from './students/students.component';
import { StudentEditComponent } from './students/edit/student_edit.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { ClassroomEditComponent } from './classroom/edit/classroom_edit.component';
import { OccurrenceComponent } from './occurrence/occurrence.component';
import { OccurrenceEditComponent } from './occurrence/edit/occurrence_edit.component';
import { SigninComponent } from './auth/sign_in.component';
import { AuthGuardService as AuthGuard } from './services/auth_guard.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'entrar', component: SigninComponent },
    { path: 'alunos', component: StudentsComponent, canActivate: [AuthGuard] },
    { path: 'alunos/editar/:id', component: StudentEditComponent },
    { path: 'alunos/novo', component: StudentEditComponent },
    { path: 'turmas', component: ClassroomComponent },
    { path: 'turmas/nova', component: ClassroomEditComponent },
    { path: 'ocorrencias', component: OccurrenceComponent},
    { path: 'ocorrencias/editar/:id', component: OccurrenceEditComponent},
    { path: 'ocorrencias/nova', component: OccurrenceEditComponent}
];

@NgModule({
    // EnableTracing shows all logs in the console
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, enableTracing: false })],
    exports: [RouterModule],
    providers: [ AuthGuard ]
})

export class AppRoutingModule {}