import { Movie } from '../entities/movie';

export abstract class MovieRepository {
  abstract findById(movieId: string): Promise<Movie | null>;

  abstract findManyByPremierDate(
    startDate: Date,
    endDate: Date,
  ): Promise<Movie[]>;

  abstract create(movie: Movie): Promise<void>;

  abstract save(movie: Movie): Promise<void>;

  abstract delete(movieId: string): Promise<void>;
}
