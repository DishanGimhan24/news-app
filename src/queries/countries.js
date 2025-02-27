import { gql } from '@apollo/client';

export const GET_COUNTRIES_WITH_USD = gql`
  query GetCountriesWithUSD {
    countries(filter: { currency: { eq: "USD" } }) {
      name
      code
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;