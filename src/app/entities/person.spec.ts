import { Person } from './person';

describe('Person', () => {
  it('should be able to create a person', () => {
    const person = new Person({
      name: 'Person',
      role: 'role',
    });

    expect(person).toBeTruthy();
  });

  it('should not be able to create a person that has a name with less than 3 characters', () => {
    expect(() => {
      new Person({
        name: 'A',
        role: 'role',
      });
    }).toThrow();
  });

  it('should not be able to create a person that has a name with moe than 240 characters', () => {
    expect(() => {
      new Person({
        name: 'A'.repeat(241),
        role: 'role',
      });
    }).toThrow();
  });
});
