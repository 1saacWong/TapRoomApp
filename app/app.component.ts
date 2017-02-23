import { Component } from '@angular/core';
import { Keg } from './Keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Tap Room App</h1>
    <keg-list
    [kegList]="masterKegList"
    (submitList)="showDetails($event)"
    ></keg-list>
    <edit-keg
     [editKeg]="selectedKeg"
     (submitEdit)="editDetails()"
     ></edit-keg>
    <new-keg
     (newSubmit)='addingKeg($event)'
    ></new-keg>
  </div>
  `
})

export class AppComponent {
  public masterKegList: Keg[] = [
      new Keg("Asahi", "Suntory", 40, 11, 5),
      new Keg("Corona", "Grupo Modelo", 40, 10, 6),

  ];
  selectedKeg: Keg = null;
  showDetails(clickedKeg: Keg){
    this.selectedKeg = clickedKeg;
  }
  editDetails(){
    this.selectedKeg = null;
  }
  addingKeg(newKeg: Keg){
    this.masterKegList.push(newKeg);
  }

}
