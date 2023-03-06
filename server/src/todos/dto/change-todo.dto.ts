import { isNotEmpty, isBoolean } from 'class-validator';

export class ChangeTodo {
  @isNotEmpty()
  readonly title: string;
  @isNotEmpty()
  isBoolean();
  readonly done: boolean;
}
