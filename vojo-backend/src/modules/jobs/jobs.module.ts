import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import { Job, JobsSchema } from './schemas/jobs.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Job.name, schema: JobsSchema }]),
    AuthModule,
  ],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
