import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private services: ClassroomServices, private router: Router) { }

  ngOnInit() {    
      this.getClassroom();    
  }

  getClassroom(): void {
      this.services.getClassroom()
                    .subscribe(
                        data => this._classroom = data.turmas,
                        error => console.log("=> Service Error " + error),
                        () => console.log('=> Finish')
                     )
  }  

  onEditItem(id: any){
    this.router.navigate(['turmas/edit', id]);
  }

  onDeleteItem(id: any){
    this.services.deleteClassroom(id)
                  .subscribe((data) => {
                      this.ngOnInit();      
                  },
                  error => console.log(error));
  }

  onAdd(){
    this.router.navigate(['turmas/nova']);
  }
}
