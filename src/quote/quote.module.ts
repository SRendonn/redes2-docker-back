import { Module } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { QuoteController } from './quote.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Quote, QuoteSchema } from 'src/models/quote.schema';

@Module({
  controllers: [QuoteController],
  providers: [QuoteService],
  imports: [
    MongooseModule.forFeature([{ name: Quote.name, schema: QuoteSchema }]),
  ],
})
export class QuoteModule {}
