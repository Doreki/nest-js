import { ConsoleLogger } from '@nestjs/common';

export class MyLogger implements ConsoleLogger {
  //   log(message: any, ...optionalParams: any[]) {
  //     console.log(message);
  //   }
  //   error(message: any, ...optionalParams: any[]) {
  //     console.log(message);
  //   }
  //   warn(message: any, ...optionalParams: any[]) {
  //     console.log(message);
  //   }
  //   debug?(message: any, ...optionalParams: any[]) {
  //     console.log(message);
  //   }
  //   verbose?(message: any, ...optionalParams: any[]) {
  //     console.log(message);
  //   }
  error(message: any, stack?: string, context?: string): void;
  error(message: any, ...optionalParams: any[]): void;
  error(
    message: unknown,
    stack?: unknown,
    context?: unknown,
    ...rest: unknown[]
  ): void {
    super.error.apply(this, arguments);
    this.doSomething();
  }

  private doSomething() {}
}
