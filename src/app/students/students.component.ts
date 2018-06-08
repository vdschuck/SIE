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

  ngOnInit() {    
      this.getStudents();        
  }

  getStudents(): void {
      this.services.getStudents()
                   .subscribe(
                       data => this._students = data.alunos,
                        error => console.log("Student Service Error: " + error),
                        () => console.log('Done.')
                     )
  }   
  
  onEditItem(id: any){
    this.router.navigate(['alunos/editar', id]);
  }

  onDeleteItem(id: any){
    this.services.deleteStudent(id)
                  .subscribe((data) => {
                      this.ngOnInit();
                  },
                  error => console.log(error));
  }

  onAdd(){
    this.router.navigate(['alunos/novo']);
  }
}
