import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";

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

  constructor(private services: OccurrenceServices, private router: Router, private classroomServices: ClassroomServices) { }

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

}
