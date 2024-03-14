import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { officeModule } from 'office/office.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0:27017/office'),officeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
