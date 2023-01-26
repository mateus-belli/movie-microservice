import { Studio } from '../entities/studio';

export abstract class StudioRepository {
  abstract findById(studioId: string): Promise<Studio>;

  abstract findByMovieId(studioId: string): Promise<Studio>;

  abstract create(studio: Studio): Promise<void>;

  abstract save(studio: Studio): Promise<void>;

  abstract delete(studioId: string): Promise<void>;
}
