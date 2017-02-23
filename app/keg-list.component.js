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
var KegListComponent = (function () {
    function KegListComponent() {
        this.submitList = new core_1.EventEmitter();
    }
    KegListComponent.prototype.editCurrentKeg = function (kegToEditList) {
        this.submitList.emit(kegToEditList);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], KegListComponent.prototype, "kegList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], KegListComponent.prototype, "submitList", void 0);
    KegListComponent = __decorate([
        core_1.Component({
            selector: 'keg-list',
            template: "\n    <div class=\"col-sm-4\" *ngFor=\"let currentKeg of kegList\">\n      <h2> Name: {{ currentKeg.name }}</h2>\n      <h3> Brand: {{ currentKeg.brand }}</h3>\n      <h3> Pints left: {{ currentKeg.pintCount }}</h3>\n      <h3> Price: {{ currentKeg.price }}</h3>\n      <h3> Alcohol Content(%): {{ currentKeg.alcoholContent }}</h3>\n      <button (click)=\"editCurrentKeg(currentKeg)\">Edit</button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], KegListComponent);
    return KegListComponent;
}());
exports.KegListComponent = KegListComponent;
//# sourceMappingURL=keg-list.component.js.map