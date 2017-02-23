"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Keg_model_1 = require('./Keg.model');
var NewKegComponent = (function () {
    function NewKegComponent() {
        this.newSubmit = new core_1.EventEmitter();
    }
    NewKegComponent.prototype.addNew = function (name, brand, pintCount, price, alcoholContent) {
        var addKeg = new Keg_model_1.Keg(name, brand, pintCount, price, alcoholContent);
        this.newSubmit.emit(addKeg);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewKegComponent.prototype, "newSubmit", void 0);
    NewKegComponent = __decorate([
        core_1.Component({
            selector: 'new-keg',
            template: "\n  <div class='container-fluid col-xs-12'>\n    <h4> Add new Keg </h4>\n    <h4><label> Change Name: </label>\n    <input #newName> </h4>\n    <h4><label> Change Brand: </label>\n    <input #newBrand> </h4>\n    <h4><label> Change Price: </label>\n    <input #newPrice> </h4>\n    <h4><label> Change Alcohol Content:</label>\n    <input #newAlcoholContent> </h4>\n    <button (click)=\"\n    addNew(newName.value,newBrand.value ,40, newPrice.value, newAlcoholContent.value);\n    newName.value = '';\n    newBrand.value = '';\n    newPrice.value = '';\n    newAlcoholContent.value = '';\n   \">New</button>\n   </div>\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NewKegComponent);
    return NewKegComponent;
}());
exports.NewKegComponent = NewKegComponent;
//# sourceMappingURL=new-keg.component.js.map