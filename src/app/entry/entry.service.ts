import { Entry } from './entry'

export class EntryService {
	getAll() : Entry[] {
		return [
			{date: 'datum', tokens: 10, price: 20},
			{date: 'datum', tokens: 5, price: 10}
		]
	}
}