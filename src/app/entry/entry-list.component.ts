import { Component } from '@angular/core';

import { Entry } from './entry';
import { EntryService } from './entry.service';


@Component({
	selector: 'entry-list',
	template: `
		<ul>
			<li *ngFor="let entry of entries">
				{{entry.tokens}}
			</li>
		</ul>
	`,
	providers: [EntryService]
})

export class EntryListComponent {
	entries: Entry[] = [];
	
	constructor(private _entryService : EntryService){
		this.entries = _entryService.getAll();
	}
}