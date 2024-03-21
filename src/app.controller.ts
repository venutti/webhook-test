import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get() {
    console.log('GET');
  }

  @Post('/api/stellar/create')
  create(@Body() body) {
    console.log('CREATE', body);
  }

  @Post('/api/stellar/confirm')
  confirm(@Body() body) {
    console.log('CONFIRM', body);
  }

  @Post('/api/stellar/consolidate')
  consolidate(@Body() body) {
    console.log('CONSOLIDATE', body);
  }

  @Post('/api/stellar/deliver')
  deliver(@Body() body) {
    console.log('DELIVER', body);
    throw new Error();
  }
}
