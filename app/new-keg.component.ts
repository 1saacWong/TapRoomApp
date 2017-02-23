import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './Keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <div class='container-fluid col-xs-12'>
    <h4> Add new Keg </h4>
    <h4><label> Change Name: </label>
    <input #newName> </h4>
    <h4><label> Change Brand: </label>
    <input #newBrand> </h4>
    <h4><label> Change Price: </label>
    <input #newPrice> </h4>
    <h4><label> Change Alcohol Content:</label>
    <input #newAlcoholContent> </h4>
    <button (click)="
    addNew(newName.value,newBrand.value ,40, newPrice.value, newAlcoholContent.value);
    newName.value = '';
    newBrand.value = '';
    newPrice.value = '';
    newAlcoholContent.value = '';
   ">New</button>
   </div>

  `
})

export class NewKegComponent {
  @Output()newSubmit = new EventEmitter();
  addNew(name: string, brand: string, pintCount: number, price: number, alcoholContent: number) {
  var addKeg: Keg= new Keg(name, brand, pintCount, price, alcoholContent);
    this.newSubmit.emit(addKeg);
  }
}
