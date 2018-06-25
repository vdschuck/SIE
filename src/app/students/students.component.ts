import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

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
  modalRef: BsModalRef;

  constructor(private services: StudentsServices, private router: Router, private classroomServices: ClassroomServices, private modalService: BsModalService) { }

  ngOnInit() {
    this.getStudents();
    this.getClassroom();
  }

  getStudents(): void {
    this.services.getStudents()
      .subscribe(
        data => this._students = data['alunos'],
        error => console.log("=> Service Error  " + error));
  }

  onEditItem(id: any) {
    this.router.navigate(['alunos/editar', id]);
  }

  onSubmit(form: NgForm) {   
    this.services.getStudentByFilter(form.value.nome, form.value.turma)
      .subscribe(
        data => this._students = data['alunos'],
        error => console.log("=> Service Error  " + error));
  }

  onDeleteItem(id: any) {
    this.services.deleteStudent(id)
      .subscribe((data) => {
        this.ngOnInit();
      },
        error => console.log("=> Service Error  " + error));
        
    this.modalRef.hide();
  }

  onAdd() {
    this.router.navigate(['alunos/novo']);
  }

  getClassroom(): void {
    this.classroomServices.getClassroom()
      .subscribe(
        data => this._classroom = data['turmas'],
        error => console.log("=> Service Error " + error));
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {
    this.modalRef.hide();
  }
}
