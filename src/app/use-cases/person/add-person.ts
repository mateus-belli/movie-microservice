import { Person } from 'src/app/entities/person';
import { PersonRepository } from 'src/app/repositories/person-repository';

type AddPersonRequest = {
  name: string;
  role: string;
};

type AddPersonResponse = {
  person: Person;
};

export class AddPerson {
  constructor(private personRepository: PersonRepository) {}

  async execute(request: AddPersonRequest): Promise<AddPersonResponse> {
    const person = new Person(request);

    await this.personRepository.create(person);

    return {
      person,
    };
  }
}
