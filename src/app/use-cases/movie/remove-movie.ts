import { MovieRepository } from 'src/app/repositories/movie-repository';

type RemoveMovieRequest = {
  movieId: string;
};

type RemoveMovieResponse = void;

export class RemoveMovie {
  constructor(private movieRepository: MovieRepository) {}

  async execute(request: RemoveMovieRequest): Promise<RemoveMovieResponse> {
    const { movieId } = request;

    const movie = await this.movieRepository.findById(movieId);

    await this.movieRepository.delete(movie);
  }
}
