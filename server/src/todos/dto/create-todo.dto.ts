import { isNotEmpty, isBoolean } from 'class-validator';

export class CreateTodo {
  @isNotEmpty()
  readonly title: string;
  @isNotEmpty()
  isBoolean();
  readonly done: boolean;
}
