import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly Item: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.Item.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.Item.findById(id);
  }

  async create(data: CreateItemDto): Promise<Item> {
    return await this.Item.create(data);
  }

  async delete(id: string): Promise<Item> {
    return await this.Item.findByIdAndDelete(id);
  }

  async update(id: string, data: CreateItemDto): Promise<Item> {
    return await this.Item.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  }
}
