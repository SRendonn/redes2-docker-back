import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { QuoteModule } from './quote/quote.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SecretLoader } from './config/SecretLoader';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRoot(
      process.env.NODE_ENV === 'production'
        ? `mongodb://${SecretLoader.read('DB_USERNAME')}:${SecretLoader.read(
            'DB_PASSWORD',
          )}@${SecretLoader.read('DB_HOST')}/?db=${SecretLoader.read(
            'DB_NAME',
          )}`
        : `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/?db=${process.env.DB_NAME}`,
    ),
    QuoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
