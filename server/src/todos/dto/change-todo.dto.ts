import { isNotEmpty, isBoolean } from 'class-validator';

export class ChangeTodo {
  readonly title: string;
  readonly done: boolean;
}
