import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ClassroomServices } from '../services/classroom.services';
import { Classroom } from '../models/classroom.model';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css'],
  providers: [ClassroomServices]
})
export class ClassroomComponent implements OnInit {
  _classroom: Classroom[];
  modalRef: BsModalRef;

  constructor(private services: ClassroomServices, private router: Router, private modalService: BsModalService) { }

  ngOnInit() {
    this.getClassroom();
  }

  getClassroom(): void {
    this.services.getClassroom()
      .subscribe(
        data => this._classroom = data['turmas'],
        error => console.log("=> Service Error " + error));
  }

  onEditItem(id: any) {
    this.router.navigate(['turmas/edit', id]);
  }

  onDeleteItem(id: any) {
    this.services.deleteClassroom(id)
      .subscribe((data) => {
        this.ngOnInit();
      },
        error => console.log("=> Service Error  " + error));
        
    this.modalRef.hide();
  }

  onAdd() {
    this.router.navigate(['turmas/nova']);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {
    this.modalRef.hide();
  }
}
