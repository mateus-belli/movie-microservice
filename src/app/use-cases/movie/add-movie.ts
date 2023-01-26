import { Person } from 'src/app/entities/person';
import { Movie } from '../../entities/movie';
import { MovieRepository } from '../../repositories/movie-repository';
import { Studio } from 'src/app/entities/studio';

type AddMovieRequest = {
  title: string;
  description?: string | null | undefined;
  poster?: string | null | undefined;
  genre: string[];
  studio: Studio;
  persons: Person[];
  premiereDate?: Date;
};

type AddMovieResponse = {
  movie: Movie;
};

export class AddMovie {
  constructor(private movieRepository: MovieRepository) {}

  async execute(request: AddMovieRequest): Promise<AddMovieResponse> {
    const movie = new Movie(request);

    await this.movieRepository.create(movie);

    return {
      movie,
    };
  }
}
