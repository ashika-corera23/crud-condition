 import {Prop, Schema,SchemaFactory } from '@nestjs/mongoose'
import { Collection } from 'mongoose'
import { of } from 'rxjs';
import { Document } from 'mongoose';

@Schema({collection:'attendance'})
 export class office extends Document
 { 
    @Prop()
    emp_id:string;

    @Prop()
    name:string;

    @Prop()
    punchin:number;

    @Prop()
    punchout:number;
}

 export const officeSchema = SchemaFactory.createForClass(office)