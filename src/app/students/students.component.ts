import { Component, OnInit } from '@angular/core';

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

  constructor(private services: StudentsServices) { }

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
}
