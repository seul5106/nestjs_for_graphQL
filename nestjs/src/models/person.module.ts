import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PersonProviders } from './person.provider';
import { PersonResolver } from './person.resolver';
import { PersonService } from './person.service';

@Module({
  imports: [DatabaseModule],
  providers: [PersonResolver, PersonService, ...PersonProviders],
})
export class PersonModule {}
