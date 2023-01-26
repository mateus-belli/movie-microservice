import { Movie } from "./movie";
import { Person } from "./person";
import { Studio } from "./studio";

describe('Movie', () => {
  it('should be able to create a movie', () => {
    const movie = new Movie({
      title: 'Title',
      description: 'Description',
      genre: ['Action', 'Thriller'],
      persons: [
        new Person({ name: 'Person 1', role: 'Role' }),
        new Person({ name: 'Person 2', role: 'Role' }),
      ],
      studio: new Studio({ name: 'Studio' }),
    });

    expect(movie).toBeTruthy();
  });
});
