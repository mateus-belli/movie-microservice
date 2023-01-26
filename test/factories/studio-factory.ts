import { Studio } from 'src/app/entities/studio';

type Override = Partial<Studio>;

export function makeStudio(override: Override = {}) {
  return new Studio({
    name: 'Movie Studio',
    ...override,
  });
}
