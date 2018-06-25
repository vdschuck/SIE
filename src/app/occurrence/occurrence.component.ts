import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { OccurrenceServices } from '../services/occurrence.services';
import { ClassroomServices } from '../services/classroom.services';
import { Occurrence } from '../models/occurrence.model';
import { Classroom } from '../models/classroom.model';

@Component({
  selector: 'app-classroom',
  templateUrl: './occurrence.component.html',
  styleUrls: ['./occurrence.component.css'],
  providers: [OccurrenceServices]
})
export class OccurrenceComponent implements OnInit {
  _occurrence: Occurrence[];
  _classroom: Classroom[];
  modalRef: BsModalRef;

  constructor(private services: OccurrenceServices, private router: Router, private classroomServices: ClassroomServices, private modalService: BsModalService) { }

  ngOnInit() {
    this.getOccurrence();
    this.getClassroom();
  }

  getOccurrence(): void {
    this.services.getOccurrence()
      .subscribe(
        data => this._occurrence = data['ocorrencias'],
        error => console.log("=> Service Error " + error));
  }

  onSubmit(form: NgForm) {
    this.services.getOccurrnceByFilter(form.value.nome, form.value.turma)
      .subscribe(
        data => this._occurrence = data['ocorrencias'],
        error => console.log("=> Service Error  " + error));
  }


  onEditItem(id: any) {
    this.router.navigate(['ocorrencias/editar', id]);
  }

  onDeleteItem(id: any) {
    this.services.deleteOccurrence(id)
      .subscribe((data) => {
        this.ngOnInit();
      },
        error => console.log("=> Service Error " + error));

    this.modalRef.hide();
  }

  onAdd() {
    this.router.navigate(['ocorrencias/nova']);
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
