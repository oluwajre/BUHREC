import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const researches = [...Array(10)].map((_, index) => ({
  title: faker.company.bs(),
  status: sample(['approved', 'pending']),
}));
