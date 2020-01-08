import { greeter, Person } from './greeter';
/**
 * Greeting
 * @param person An plan object with firstname and optional lastname
 * @returns string with a special greeting.
 */
export function sayHello(person: Person): string {
  return greeter(person);
}
