import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query GetBooks {
    books {
        id
        name
        image
        author
        description
      }
    }
  }
`;
export const CREATE_BOOK = gql`
  mutation CreateBook {
    books {
        id
        name
        image
        author
        description
      }
    
  }
`;
