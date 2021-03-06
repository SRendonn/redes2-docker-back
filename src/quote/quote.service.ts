import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quote, QuoteDocument } from 'src/models/quote.schema';

@Injectable()
export class QuoteService {
  constructor(
    @InjectModel(Quote.name) private readonly model: Model<QuoteDocument>,
  ) {}

  async findAll(): Promise<Quote[]> {
    return await this.model.find().exec();
  }

  async create(author: string, quote: string): Promise<Quote> {
    return await new this.model({
      author,
      quote,
    }).save();
  }

  async deleteOne(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id);
  }

  async deleteAll(): Promise<void> {
    await this.model.deleteMany();
  }
}
