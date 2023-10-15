import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Person } from '../schema/person.schema';

@Injectable()
export class PersonService {
  constructor(
    // eslint-disable-next-line prettier/prettier
    @Inject('PERSON_MODEL')
    private personModel: Model<Person>,
  ) {
    // this.initData();
  }

  async findAll(): Promise<Person[]> {
    return this.personModel.find().exec();
  }

  async createOne() {
    return this.personModel.create();
  }

  async initData() {
    await this.personModel.create({
      name: '정한슬',
      number: '01012345678',
      email: 'email@example.com',
    });
  }
}
