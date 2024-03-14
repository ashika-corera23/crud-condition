import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { officeService } from './office.service';
import { office } from './office.schema';

@Controller('office')
export class officeController {
  constructor(private readonly officeService: officeService) {}

  @Get('/:id')
  getById(@Param('id') id:string):Promise<office>
  {
    console.log("id>>>>",id);
    
    return this.officeService.getbyid(id)
  }
  @Get()
  getAllOffice(): Promise<office[]> {
    return this.officeService.getAll();
  }
  @Post()
    create(@Body() Office:office): Promise<office>{
      return this.officeService.create(Office);
    }

  @Put('/:id')
  update(@Body()Office:office , @Param('id') id:string ):Promise<office>
  {
    return this.officeService.update(Office,id); 
  }
 
@Delete('/:id')
 delete(@Param('id') id: string):Promise<office>
 {
  console.log("id>>",id);
  
return this.officeService.delete(id)
 }
}