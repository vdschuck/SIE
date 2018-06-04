import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { FormGroup, FormControl, FormArray, Validators, ReactiveFormsModule, NgForm } from "@angular/forms";

import { StudentsServices } from '../../services/students.services';
import { Student } from '../../models/student.model';
import { Classroom } from '../../models/classroom.model';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student_edit.component.html',
  styleUrls: ['./student_edit.component.css'],
  providers: [StudentsServices]
})

export class StudentEditComponent implements OnInit {
  id: string;
  editMode = false;
  model = new Student('', '', null, '', '', '', '', '');
  studentForm: FormGroup;

  constructor(private route: ActivatedRoute, private services: StudentsServices, private router: Router) {}      

  ngOnInit() { 
    this.model._id = this.route.snapshot.paramMap.get('id');
    this.editMode = !!this.model._id;

    if (this.editMode) this.initForm();
  }
  
  private initForm() {

    this.services.getStudentById(this.model._id)
    .subscribe((data) => {    
      if (data.aluno) {
        this.model._id = data.aluno._id;
        this.model.nome = data.aluno.nome;
        this.model.nomeMae = data.aluno.nomeMae;
        this.model.telefoneMae = data.aluno.telefoneMae;
        this.model.nomePai = data.aluno.nomePai;
        this.model.telefonePai = data.aluno.telefonePai;
        this.model.turma = new Classroom(data.aluno.turma._id, data.aluno.turma.descricao);
      } 
    },
      error => console.log("Student Service Error: " + error)        
      )
  }

  onSubmit(form: NgForm){ 
    if(form.valid){
      if(this.editMode)       
        this.services.updateStudent(this.model._id, form.value);                   
      else {
        this.services.insertStudent(form.value)
        .subscribe((data) => {
          console.log(data);
        }
        ,error => console.log(error))
      }

   }
    this.onCancel(); 
  }
  
  onCancel(){
    this.router.navigate(['alunos']);
  }

}
