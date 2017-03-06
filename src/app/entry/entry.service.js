"use strict";
var EntryService = (function () {
    function EntryService() {
    }
    EntryService.prototype.getAll = function () {
        return [
            { date: 'datum', tokens: 10, price: 20 },
            { date: 'datum', tokens: 5, price: 10 }
        ];
    };
    return EntryService;
}());
exports.EntryService = EntryService;
//# sourceMappingURL=entry.service.js.map