import { Movie } from 'src/app/entities/movie';
import { Studio } from 'src/app/entities/studio';
import { StudioRepository } from 'src/app/repositories/studio-repository';

export class InMemoryStudioRepository implements StudioRepository {
  private studios: Studio[] = [];

  async findById(studioId: string): Promise<Studio> {
    return this.studios.find((item) => item.id === studioId);
  }

  async findByMovieId(movieId: string): Promise<Studio> {
    return this.studios.find((item) => item.id === movieId);
  }

  async create(studio: Studio): Promise<void> {
    this.studios.push(studio);
  }

  async save(studio: Studio): Promise<void> {
    const index = this.studios.findIndex((item) => item.id === studio.id);

    studio[index] = studio;
  }

  async delete(studioId: string): Promise<void> {
    const index = this.studios.findIndex((item) => item.id === studioId);

    this.studios.splice(index, 1);
  }
}
