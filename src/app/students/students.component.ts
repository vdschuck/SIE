import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";

import { StudentsServices } from '../services/students.services';
import { ClassroomServices } from '../services/classroom.services';
import { Student } from '../models/student.model';
import { Classroom } from '../models/classroom.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentsServices]
})
export class StudentsComponent implements OnInit {
  _students: Student[];
  _classroom: Classroom[];

  constructor(private services: StudentsServices, private router: Router, private classroomServices: ClassroomServices) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.services.getStudents()
      .subscribe(
        data => this._students = data['alunos'],
        error => console.log("=> Service Error  " + error));
  }

  getStudentByFilter(form: NgForm) {
    this.services.getStudentByFilter(form.value.nome, form.value.turma)
      .subscribe(
        data => this._students = data['alunos'],
        error => console.log("=> Service Error  " + error));
  }

  onEditItem(id: any) {
    this.router.navigate(['alunos/editar', id]);
  }

  onDeleteItem(id: any) {
    this.services.deleteStudent(id)
      .subscribe((data) => {
        this.ngOnInit();
      },
        error => console.log("=> Service Error  " + error));
  }

  onAdd() {
    this.router.navigate(['alunos/novo']);
  }

  getClassroom(): void {
    this.classroomServices.getClassroom()
      .subscribe(
        data => this._classroom = data.turmas,
        error => console.log("=> Service Error " + error));
  }
}
