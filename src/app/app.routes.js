"use strict";
var router_1 = require('@angular/router');
var entry_list_component_1 = require('./entry/entry-list.component');
var routes = [
    {
        path: 'entries',
        component: entry_list_component_1.EntryListComponent,
    },
    {
        path: '',
        redirectTo: '/entries',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map