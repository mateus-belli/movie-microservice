import { Studio } from './studio';

describe('studio', () => {
  it('should be able to create a studio', () => {
    const studio = new Studio({
      name: 'Studio A',
    });

    expect(studio).toBeTruthy();
  });
});
