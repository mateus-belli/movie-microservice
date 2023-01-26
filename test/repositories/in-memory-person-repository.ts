import { Person } from 'src/app/entities/person';
import { PersonRepository } from 'src/app/repositories/person-repository';

export class InMemoryPersonRepository implements PersonRepository {
  private persons: Person[] = [];

  async findById(personId: string): Promise<Person> {
    return this.persons.find((item) => item.id === personId);
  }

  async create(person: Person): Promise<void> {
    this.persons.push(person);
  }
}
