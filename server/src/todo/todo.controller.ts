import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  getAll() {
    return 'HELLO WORLD';
  }
}
