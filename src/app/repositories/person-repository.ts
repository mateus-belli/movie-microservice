import { Person } from '../entities/person';

export abstract class PersonRepository {
  abstract findById(personId: string): Promise<Person>;

  abstract create(person: Person): Promise<void>;
}
