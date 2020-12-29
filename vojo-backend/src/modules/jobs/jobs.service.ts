import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job, JobsDocument } from './schemas/jobs.schema';

@Injectable()
export class JobsService {
  constructor(@InjectModel(Job.name) private jobsModel: Model<JobsDocument>) {}

  async findAll(): Promise<Job[]> {
    return this.jobsModel.find();
  }

  async editJob(id: string, job: Job): Promise<Job> {
    const updatedJob = await this.jobsModel.findByIdAndUpdate(id, job, {
      new: true,
    });

    return updatedJob;
  }
}
