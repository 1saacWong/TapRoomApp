import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './Keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <div class="col-sm-4" *ngFor="let currentKeg of kegList">
      <h2> Name: {{ currentKeg.name }}</h2>
      <h3> Brand: {{ currentKeg.brand }}</h3>
      <h3> Pints left: {{ currentKeg.pintCount }}</h3>
      <h3> Price: {{ currentKeg.price }}</h3>
      <h3> Alcohol Content(%): {{ currentKeg.alcoholContent }}</h3>
      <button (click)="editCurrentKeg(currentKeg)">Edit</button>
    </div>
  `
})

export class KegListComponent {
  @Input()kegList: Keg[];
  @Output()submitList = new EventEmitter();
  editCurrentKeg(kegToEditList: Keg) {
    this.submitList.emit(kegToEditList);
  }
}
