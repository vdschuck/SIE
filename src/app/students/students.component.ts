import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StudentsServices } from '../services/students.services';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentsServices]
})
export class StudentsComponent implements OnInit {  
  _students: Student[];  

  constructor(private services: StudentsServices, private router: Router) { }

  getStudents(): void {
        this.services.getStudents()
                     .subscribe(
                        data => this._students = data.alunos,
                        error => console.log("Student Service Error: " + error),
                        () => console.log('Done.')
                     )
  }  
  
  ngOnInit() {    
        this.getStudents();

        console.log(this._students);
  }

  onEditItem(id: any){
    this.router.navigate(['alunos/edit', id]);
  }

  onDeleteItem(id: any){
    this.services.deleteStudent(id);
  }

  onAdd(){
    this.router.navigate(['alunos/create']);
  }
}
