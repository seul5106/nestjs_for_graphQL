import { gql } from '@apollo/client';

const GET_PERSON = gql`
  query {
    getAllPerson() {
        id
        name
    }
  }
`;

export { GET_PERSON };
