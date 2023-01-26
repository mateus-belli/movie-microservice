import { Person } from 'src/app/entities/person';

type Override = Partial<Person>;

export function makePerson(override: Override = {}) {
  return new Person({
    name: "Person's name",
    role: "Person's role",
    ...override,
  });
}
