import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const words = [
      { spelling: 'awal', translation: 'word' },
      {spelling: 'aman', translation: 'water' },
      { spelling: 'afus', translation: 'hand' },
      { spelling: 'axxam', translation: 'house' },
      { spelling: 'izem', translation: 'lion' },
      { spelling: 'tala', translation: 'fountain' },
      { spelling: 'iger', translation: 'field' },
      { spelling: 'tama', translation: 'side' },
      { spelling: 'isem', translation: 'name' },
      { spelling: 'aqcic', translation: 'boy' }
    ];
    return {words};
  }
}