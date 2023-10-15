import * as mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (
      configService: ConfigService,
    ): Promise<typeof mongoose> => {
      const MONGO_URI = configService.get<string>('MONGODB_URI');
      console.log(MONGO_URI);
      return await mongoose.connect(MONGO_URI);
    },
    inject: [ConfigService],
  },
];
