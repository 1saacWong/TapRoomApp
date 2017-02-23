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
var EditKegComponent = (function () {
    function EditKegComponent() {
        this.submitEdit = new core_1.EventEmitter();
    }
    EditKegComponent.prototype.editSelectedKeg = function (kegToEdit) {
        this.submitEdit.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], EditKegComponent.prototype, "editKeg", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditKegComponent.prototype, "submitEdit", void 0);
    EditKegComponent = __decorate([
        core_1.Component({
            selector: 'edit-keg',
            template: "\n<div class = \"container\" *ngIf='editKeg'>\n   <h4><label> Change Name: </label>\n   <input [(ngModel)]=\"editKeg.name\"></h4>\n   <h4><label> Change Brand: </label>\n   <input [(ngModel)]=\"editKeg.brand\"></h4>\n   <h4><label> Change Number of Pints left: </label>\n   <input [(ngModel)]=\"editKeg.pintCount\"></h4>\n   <h4><label> Change Price: </label>\n   <input [(ngModel)]=\"editKeg.price\"></h4>\n   <h4><label> Change Alcohol Content:</label>\n   <input [(ngModel)]=\"editKeg.alcoholContent\"></h4>\n   <button (click)=\"editSelectedKeg()\">Done</button>\n  </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], EditKegComponent);
    return EditKegComponent;
}());
exports.EditKegComponent = EditKegComponent;
//# sourceMappingURL=edit-keg.component.js.map