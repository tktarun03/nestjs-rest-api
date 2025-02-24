import { Injectable } from '@nestjs/common';
import { Item } from './items.model';

@Injectable()
export class ItemsService {
    private items: Item[] = [];

    getAllItems(): Item[] {
        return this.items;
    }

    addItem(item: Item): Item {
        this.items.push(item);
        return item;
    }
}
