import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './Keg.model';

@Component({
  selector: 'edit-keg',
  template: `
<div class = "container" *ngIf='editKeg'>
   <h4><label> Change Name: </label>
   <input [(ngModel)]="editKeg.name"></h4>
   <h4><label> Change Brand: </label>
   <input [(ngModel)]="editKeg.brand"></h4>
   <h4><label> Change Number of Pints left: </label>
   <input [(ngModel)]="editKeg.pintCount"></h4>
   <h4><label> Change Price: </label>
   <input [(ngModel)]="editKeg.price"></h4>
   <h4><label> Change Alcohol Content:</label>
   <input [(ngModel)]="editKeg.alcoholContent"></h4>
   <button (click)="editSelectedKeg()">Done</button>
  </div>
    `
})

export class EditKegComponent{
  @Input()editKeg: Keg[];
  @Output()submitEdit = new EventEmitter();
  editSelectedKeg(kegToEdit: Keg){
  this.submitEdit.emit();
  }
}
