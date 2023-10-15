import { Connection } from 'mongoose';
import { PersonSchema } from '../schema/person.schema';

export const PersonProviders = [
  {
    provide: 'PERSON_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Person', PersonSchema, 'Person'),
    inject: ['DATABASE_CONNECTION'],
  },
];
