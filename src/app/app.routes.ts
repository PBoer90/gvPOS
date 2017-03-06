import { Routes, RouterModule } from '@angular/router';

import { EntryListComponent } from './entry/entry-list.component';

const routes: Routes = [

	{
		path: 'entries',
		component: EntryListComponent,
	},
	{
		path: '',
		redirectTo: '/entries',
		pathMatch: 'full'
	}
];

export const routing = RouterModule.forRoot(routes);