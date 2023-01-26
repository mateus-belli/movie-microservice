import { Movie } from 'src/app/entities/movie';
import { makePerson } from './person-factory';
import { makeStudio } from './studio-factory';

type Override = Partial<Movie>;

export function makeMovie(override: Override = {}) {
  return new Movie({
    genre: ['Genre'],
    persons: [makePerson()],
    studio: makeStudio(),
    title: 'Title of the movie',
    description: 'The description of a movie',
    poster: 'www.google.com',
    premiereDate: new Date(),
    ...override,
  });
}
