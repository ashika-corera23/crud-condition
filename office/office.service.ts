import { Injectable } from '@nestjs/common';
import { office, officeSchema } from './office.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class officeService {


  constructor(@InjectModel(office.name) private officeModel: Model<office>) { }

  async getbyid(id: string): Promise<office> {
    // throw new Error('Method not implemented.');
    return this.officeModel.findById(id).exec()
  }

  getAll(): Promise<office[]> {
    return this.officeModel.find().exec();
  }
  create(Office: office): Promise<office> {
    // throw new Error('Method not implemented.');
    const officeattendance = new this.officeModel(Office)
    return officeattendance.save()
  }

  async update(Office: Partial<office>, id: string): Promise<office> {
    // throw new Error('Method not implemented.');

    try {
      console.log("value>>>", Office, id);
      if (Office.emp_id) {
        const officeupdate = await this.officeModel.findByIdAndUpdate(id, Office).exec()
        return officeupdate
      }
      else {
        console.log("he/she is not our employee");
      }
    } catch (error) {
      console.log("error", error)
    }
  }

  async delete(id: string): Promise<office> {
    // throw new Error('Method not implemented.');
    try {
      return this.officeModel.findByIdAndDelete(id).exec()
    } catch (error) {
      console.log("errrorrr>>>", error);
    }

  }

}

