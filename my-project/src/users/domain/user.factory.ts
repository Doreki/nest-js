import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';

@Injectable()
export class UserFactory {
  constructor(private eventBus: EventBus) {}

  create(
    id: string,
    name: string,
    email: string,
    signupVerifyToken: string,
    password: string,
  ): User {
    const user = new User(id, name, email, signupVerifyToken, password);

    this.eventBus.publish(new UserCreatedEvent(email, signupVerifyToken));

    return user;
  }
}
