import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuoteService } from './quote.service';

interface Quote {
  author: string;
  quote: string;
}

@Controller('quotes')
export class QuoteController {
  constructor(private readonly service: QuoteService) {}

  @Get()
  async getAll() {
    return await this.service.findAll();
  }

  @Post('/create')
  async create(@Body() { author, quote }: Quote) {
    return await this.service.create(author, quote);
  }
}
