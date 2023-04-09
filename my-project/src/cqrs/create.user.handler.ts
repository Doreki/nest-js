import { ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './create.user.command';

export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  async execute(command: CreateUserCommand): Promise<any> {}
}
