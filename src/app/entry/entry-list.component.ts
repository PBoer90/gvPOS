import { Component } from '@angular/core';

import { Entry } from './entry';


@Component({
	selector: 'entry-list',
	template: `
		<ul>
			<li *ngFor="let entry of entries">
				{{entry.tokens}}
			</li>
		</ul>
	`
})

export class EntryListComponent {
	entries: Entry[] = [
		{date: 'datum', tokens: 10, price: 20},
		{date: 'datum', tokens: 5, price: 10}
	]
}