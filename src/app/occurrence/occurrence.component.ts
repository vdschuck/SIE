import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OccurrenceServices } from '../services/occurrence.services';
import { Occurrence } from '../models/occurrence.model';

@Component({
  selector: 'app-classroom',
  templateUrl: './occurrence.component.html',
  styleUrls: ['./occurrence.component.css'],
  providers: [OccurrenceServices]
})
export class OccurrenceComponent implements OnInit {  
    _occurrence: Occurrence[];  

  constructor(private services: OccurrenceServices, private router: Router) { }

  ngOnInit() {    
      this.getOccurrence();    
  }

  getOccurrence(): void {
      this.services.getOccurrence()
                    .subscribe(
                        data => this._occurrence = data.ocorrencias,
                        error => console.log("=> Service Error " + error),
                        () => console.log('=> Finish')
                     )
  }  

  onEditItem(id: any){
    this.router.navigate(['ocorrencias/editar', id]);
  }

  onDeleteItem(id: any){
    this.services.deleteOccurrence(id)
                  .subscribe((data) => {
                      this.ngOnInit();      
                  },
                  error => console.log(error));
  }

  onAdd(){
    this.router.navigate(['ocorrencias/nova']);
  }
}
