import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JobsService } from './jobs.service';
import { Job } from './schemas/jobs.schema';

@Controller('v3/jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @Get()
  async index() {
    return this.jobsService.findAll();
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  async update(@Param() { id }, @Body() job: Job) {
    return this.jobsService.editJob(id, job);
  }
}
