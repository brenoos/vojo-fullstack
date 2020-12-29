import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Jobs, JobsDocument } from './schemas/jobs.schema';

@Injectable()
export class JobsService {
  constructor(@InjectModel(Jobs.name) private jobsModel: Model<JobsDocument>) {}

  async findAll(): Promise<Jobs[]> {
    return this.jobsModel.find().exec();
  }
}
