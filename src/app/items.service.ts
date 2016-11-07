import { Injectable } from '@angular/core'
import { Item } from './item'

@Injectable()
export class ItemsService {
  getItems(): Item[] {
    let icons = [
      'flask',
      'wifi',
      'beer',
      'football',
      'basketball',
      'paper-plane',
      'american-football',
      'boat',
      'bluetooth',
      'build'
    ];

    let items = [];
    for (let i = 1; i < 11; i++) {
      items.push(
        new Item(
          'Item obj(served by ItemsService in ngOnInit) ' + i,
          'This is Item #' + i,
          icons[Math.floor(Math.random() * icons.length)]
        )
      )
    }

    return items;
  }
}

