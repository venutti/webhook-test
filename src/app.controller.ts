import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get() {
    console.log('GET');
  }

  @Post()
  post(@Body() body) {
    console.log('POST', body);
  }
}
