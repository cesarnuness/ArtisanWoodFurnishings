import { Controller, Get, Param } from '@nestjs/common';

@Controller('test')
export default class TestController {
  @Get()
  findAll(): string {
    return 'This is a test caraio!';
  }

  @Get(':id')
  testingAgain(@Param('id') id: string): string {
    return `This is a test of the test caraio! ID: ${id}`;
  }
}
