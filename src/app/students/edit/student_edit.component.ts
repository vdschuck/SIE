import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";

import { StudentsServices } from '../../services/students.services';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student_edit.component.html',
  styleUrls: ['./student_edit.component.css'],
  providers: [StudentsServices]
})

export class StudentEditComponent implements OnInit {
  id: string;
  student: Student;
  editMode = false;
  studentForm: FormGroup;

  constructor(private route: ActivatedRoute, private services: StudentsServices, private router: Router) {}      

  ngOnInit() { 
    this.id = this.route.snapshot.paramMap.get('id');
    this.editMode = true;
    this.initForm();
    
    /*this.route.params.subscribe(
      (params: Params) => { 
        this.id = params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );*/
  }
  
  private initForm(){    
    let nome = '', nomeMae = '', nomePai = '', endereco = '', telefonePai = '', telefoneMae = '', turma = new FormArray([]);

    if(this.editMode){        
        this.getStudentById(this.id); 
                
        /*nome = this.student.nome;
        nomeMae = this.student.nomeMae;
        nomePai = this.student.nomePai;
        endereco = this.student.endereco;
        telefoneMae = this.student.telefoneMae;
        telefonePai = this.student.telefonePai;             

        if(this.student['turma']){
            for(let turma of this.student.turma){
              turma.descricao = turma.descricao;
              turma.id = turma.id;   
        }
      }*/
    }   

    /*this.studentForm = new FormGroup({
      'nome': new FormControl(nome, Validators.required),
      'nomeMae': new FormControl(nomeMae, Validators.required),
      'nomePai': new FormControl(nomePai, Validators.required),
      'endereco': new FormControl(endereco, Validators.required),
      'telefoneMae': new FormControl(telefoneMae, Validators.required),
      'telefonePai': new FormControl(telefonePai, Validators.required),
      'turma': turma
    })  */ 
  }

  getStudentById(id: string): void {
    this.services.getStudentById(id)
        .subscribe(data => this.student = data.aluno,
                    error => console.log("Student Service Error: " + error),
                    () => console.log('Done.'+ this.student + '-' + this.id)
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
