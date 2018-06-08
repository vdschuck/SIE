import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { StudentsComponent } from './students/students.component';
import { StudentEditComponent } from './students/edit/student_edit.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { ClassroomEditComponent } from './classroom/edit/classroom_edit.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'alunos', component: StudentsComponent },
    { path: 'alunos/editar/:id', component: StudentEditComponent },
    { path: 'alunos/novo', component: StudentEditComponent },
    { path: 'turmas', component: ClassroomComponent },
    { path: 'turmas/nova', component: ClassroomEditComponent }
];

@NgModule({
    // EnableTracing shows all logs in the console
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, enableTracing: true })],
    exports: [RouterModule]
})

export class AppRoutingModule {}