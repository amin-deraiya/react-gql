import { gql, useQuery } from '@apollo/client';

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      id
      image
      created
      episode {
        name
        episode
      }
    }
  }
`;

export const useCharacter = (id) => {
  console.log({ id });
  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });

  return { data, loading, error };
};
