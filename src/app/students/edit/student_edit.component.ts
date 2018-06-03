import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { FormGroup, FormControl, FormArray, Validators, ReactiveFormsModule } from "@angular/forms";

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
        /*
        console.log(data);
        this.studentForm = new FormGroup({
          nome: new FormControl(data.nome, Validators.required),
          nomeMae: new FormControl(data.nomeMae, Validators.required),
          nomePai: new FormControl(data.nomePai, Validators.required),
          endereco: new FormControl(data.endereco, Validators.required),
          telefoneMae: new FormControl(data.telefoneMae, Validators.required),
          telefonePai: new FormControl(data.telefonePai, Validators.required)
          //turma: turma
        }) */
      },
      error => console.log("Student Service Error: " + error)        
      )
  }

  onSubmit(){ 
    /*if(this.editMode)
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    else
      this.recipeService.addRecipe(this.recipeForm.value);

    this.onCancel(); */
  }

  onAddIngredient(){
    /*(<FormArray>this.recipeForm.get('ingredients')).push(
      new  FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )*/
  }
  
  onCancel(){
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDeleteIngredient(id: number){
    /*(<FormArray>this.recipeForm.get('ingredients')).removeAt(id);*/
  }

  getControls() {
    /*return (<FormArray>this.recipeForm.get('ingredients')).controls;*/
  }
}
