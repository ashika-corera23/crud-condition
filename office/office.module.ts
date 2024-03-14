import { Module } from '@nestjs/common';
import { officeService } from './office.service';
import { officeController } from './office.controller';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { office, officeSchema } from './office.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:office.name,schema:officeSchema}])],
  controllers: [officeController],
  providers: [officeService],
})
export class officeModule {}

