import { Movie } from 'src/app/entities/movie';
import { MovieRepository } from 'src/app/repositories/movie-repository';
import { MovieNotFound } from 'src/app/use-cases/movie/errors/movie-not-found';

export class InMemoryMovieRepository implements MovieRepository {
  private movies: Movie[] = [];

  async findById(movieId: string): Promise<Movie> {
    return this.movies.find((item) => item.id === movieId);
  }

  async create(movie: Movie): Promise<void> {
    this.movies.push(movie);
  }

  async save(movie: Movie): Promise<void> {
    const index = this.movies.findIndex((item) => item.id === movie.id);

    if (!index) {
      throw new MovieNotFound();
    }

    this.movies[index] = movie;
  }

  async delete(movieId: string): Promise<void> {
    const index = this.movies.findIndex((item) => item.id === movieId);

    if (!index) {
      throw new MovieNotFound();
    }

    this.movies.splice(index, 1);
  }

  async findManyByPremierDate(startDate: Date, endDate: Date): Promise<Movie[]> {
    const premierMovies = this.movies.filter(
      (item) => item.premiereDate >= startDate && item.premiereDate <= endDate,
    );

    return premierMovies;
  }
}
