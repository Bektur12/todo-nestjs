import { isNotEmpty, isBoolean } from 'class-validator';

export class CreateTodo {
  readonly title: string;
  readonly done: boolean;
}
