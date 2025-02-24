import { Controller, Get, Post, Body } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './items.model';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    getAllItems(): Item[] {
        return this.itemsService.getAllItems();
    }

    @Post()
    addItem(@Body() item: Item): Item {
        return this.itemsService.addItem(item);
    }
}
