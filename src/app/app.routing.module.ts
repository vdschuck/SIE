import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { StudentsComponent } from './students/students.component';
import { StudentEditComponent } from './students/edit/student_edit.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'alunos', component: StudentsComponent },
    { path: 'alunos/edit/:id', component: StudentEditComponent },
    { path: 'alunos/create', component: StudentEditComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, enableTracing: true })],
    exports: [RouterModule]
})

export class AppRoutingModule {}