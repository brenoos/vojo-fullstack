import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import { Jobs, JobsSchema } from './schemas/jobs.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Jobs.name, schema: JobsSchema }]),
  ],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
