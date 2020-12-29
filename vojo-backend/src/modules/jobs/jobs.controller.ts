import { Controller, Get } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('v3/jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @Get()
  async index() {
    return this.jobsService.findAll();
  }
}
