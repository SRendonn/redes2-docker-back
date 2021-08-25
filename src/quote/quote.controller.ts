import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
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

  @Post('create')
  async create(@Body() { author, quote }: Quote) {
    return await this.service.create(author, quote);
  }

  @Delete('delete')
  async deleteAll() {
    await this.service.deleteAll();
  }

  @Delete('delete/:id')
  async deleteQuote(@Param('id') id: string) {
    await this.service.deleteOne(id);
  }
}
