import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { FormGroup, FormControl, FormArray, Validators, ReactiveFormsModule, NgForm } from "@angular/forms";

import { OccurrenceTypeServices } from '../../services/occurrence_type.services';
import { StudentsServices } from '../../services/students.services';
import { ClassroomServices } from '../../services/classroom.services';
import { OccurrenceServices } from '../../services/occurrence.services';
import { Occurrence } from '../../models/occurrence.model';
import { OccurrenceType } from '../../models/occurrence_type.model';
import { Student } from '../../models/student.model';
import { Classroom } from '../../models/classroom.model';

@Component({
  selector: 'app-occurrence-edit',
  templateUrl: './occurrence_edit.component.html',
  styleUrls: ['./occurrence_edit.component.css'],
  providers: [OccurrenceServices, OccurrenceTypeServices, StudentsServices, ClassroomServices]
})

export class OccurrenceEditComponent implements OnInit {
  id: string;
  editMode = false;
  model = new Occurrence('', new Student('', '', null, '', '', '', '', ''), '', '', new OccurrenceType('', ''), '', new Classroom('', ''));
  occurrenceForm: FormGroup;
  _classroom: Classroom[];
  _students: Student[];
  _occurrenceType: OccurrenceType[];

  constructor(private route: ActivatedRoute, private services: OccurrenceServices, private classroomServices: ClassroomServices, private studentServices: StudentsServices, private occurrenceTypeServices: OccurrenceTypeServices, private router: Router) { }

  ngOnInit() {
    this.model._id = this.route.snapshot.paramMap.get('id');
    this.editMode = !!this.model._id;

    if (this.editMode) this.initForm();

    this.getClassroom();
    this.getOccurrenceType();
    this.getStudents();
  }

  private initForm() {

    this.services.getOccurrenceById(this.model._id)
      .subscribe((data) => {
        if (data['ocorrencia']) {
          this.model._id = data['ocorrencia']._id;
          this.model.aluno = new Student(data['ocorrencia'].aluno._id, data['ocorrencia'].aluno.nome, null, '', '', '', '', '');
          this.model.data = data['ocorrencia'].data;
          this.model.detalhes = data['ocorrencia'].detalhes;
          this.model.resumo = data['ocorrencia'].resumo;
          this.model.tipoOcorrencia = new OccurrenceType(data['ocorrencia'].tipoOcorrencia._id, data['ocorrencia'].tipoOcorrencia.descricao);
          this.model.turma = new Classroom(data['ocorrencia'].turma._id, data['ocorrencia'].turma.descricao);
        }
      },
        error => console.log("=> Service Error " + error));
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.editMode) {
        this.services.updateOccurrence(this.model._id, form.value)
          .subscribe((data) => {
            this.onCancel();
          },
            error => console.log(error));
      } else {
        this.services.insertOccurrence(form.value)
          .subscribe((data) => {
            this.onCancel();
          },
            error => console.log("=> Service Error " + error));
      }
    }
  }

  onCancel() {
    this.router.navigate(['ocorrencias']);
  }

  getClassroom(): void {
    this.classroomServices.getClassroom()
      .subscribe(
        data => this._classroom = data['turmas'],
        error => console.log("=> Service Error " + error));
  }

  getOccurrenceType(): void {
    this.occurrenceTypeServices.getOccurrenceType()
      .subscribe(
        data => this._occurrenceType = data.tiposOcorrencia,
        error => console.log("=> Service Error " + error));
  }

  getStudents(): void {
    this.studentServices.getStudents()
      .subscribe(
        data => this._students = data['alunos'].alunos,
        error => console.log("=> Service Error  " + error));
  }

}
