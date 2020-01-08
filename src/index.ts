import { greeter, Person } from './greeter';
export function sayHello(person: Person): string {
  return greeter(person);
}
