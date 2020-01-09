export interface Person {
  firstname: string;
  lastname?: string;
}

export function greeter(greeting: Person): string {
  let output = `Hello ${greeting.firstname}`;

  if (greeting.lastname) {
    output += ` ${greeting.lastname}`;
  }
  output += '.';
  return output;
}
