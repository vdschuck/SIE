import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup, FormControl, FormArray, Validators, ReactiveFormsModule, NgForm } from "@angular/forms";

import { ClassroomServices } from '../../services/classroom.services';
import { Classroom } from '../../models/classroom.model';

@Component({
  selector: 'app-classroom-edit',
  templateUrl: './classroom_edt.component.html',
  styleUrls: ['./classroom_edit.component.css'],
  providers: [ClassroomServices]
})

export class ClassroomEditComponent implements OnInit {  
  model = new Classroom('', '');

  constructor(private route: ActivatedRoute, private services: ClassroomServices, private router: Router) {}      

  ngOnInit() {}

  onSubmit(form: NgForm){ 
        if(form.valid){      
            this.services.insertClassroom(form.value)
                      .subscribe((data) => {
                            this.onCancel(); 
                      },
                      error => console.log(error));  
        }    
  }
  
  onCancel(){
    this.router.navigate(['turmas']);
  }

}
