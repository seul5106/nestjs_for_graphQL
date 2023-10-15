import { Query, Resolver } from '@nestjs/graphql';
import { Person } from 'src/schema/person.schema';
import { PersonService } from './person.service';

@Resolver('Person')
export class PersonResolver {
  // eslint-disable-next-line prettier/prettier
  constructor(private personService: PersonService) {}

  @Query(() => [Person])
  async getAllPerson() {
    return await this.personService.findAll();
  }
}
