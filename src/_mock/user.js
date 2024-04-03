import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(12)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  transaction_id: sample(['234567ytfgcvxswe567543', 'dfghju765432456tyfg', 'adrtfy564323456trfdcx', 'ghujgfdsadrftgy76543245trfd']),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'not-active']),
}));
