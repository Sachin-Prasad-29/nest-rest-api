import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}
  //   @Get()
  //   findAll(@Req() req: Request, @Res() res: Response): Response {
  //     console.log(req.url);
  //     return res.send('Hello World');
  //   }
  @Get()
  async findAll(): Promise<Item[]> {
    const allItemData = await this.itemService.findAll();
    return allItemData;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Item> {
    const itemData = await this.itemService.findOne(id);
    return itemData;
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    const itemData = await this.itemService.create(createItemDto);
    return itemData;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Item> {
    const deletedItem = await this.itemService.delete(id);
    return deletedItem;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: CreateItemDto,
  ): Promise<Item> {
    const updateItem = await this.itemService.update(id, data);
    return updateItem;
  }
}
