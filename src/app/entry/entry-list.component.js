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
var entry_service_1 = require('./entry.service');
var EntryListComponent = (function () {
    function EntryListComponent(_entryService) {
        this._entryService = _entryService;
        this.entries = [];
    }
    EntryListComponent.prototype.ngOnInit = function () {
        this.entries = this._entryService.getAll();
    };
    EntryListComponent = __decorate([
        core_1.Component({
            selector: 'entry-list',
            template: "\n\t\t<ul>\n\t\t\t<li *ngFor=\"let entry of entries\">\n\t\t\t\t{{entry.tokens}}\n\t\t\t</li>\n\t\t</ul>\n\t",
            providers: [entry_service_1.EntryService]
        }), 
        __metadata('design:paramtypes', [entry_service_1.EntryService])
    ], EntryListComponent);
    return EntryListComponent;
}());
exports.EntryListComponent = EntryListComponent;
//# sourceMappingURL=entry-list.component.js.map