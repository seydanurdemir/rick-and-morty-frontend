import { gql } from "@apollo/client";

export const EXAMPLE_QUERY = gql`
  query ExampleQuery {
    characters {
      id
      name
      location {
        name
      }
      image
    }
  }
`;

export const PAGE_QUERY = gql`
  query PageQuery($number: Int, $pages: Int) {
    charactersByPage(number: $number, pages: $pages) {
      id
      name
      location {
        name
      }
      image
    }
  }
`;

export const FILTER_QUERY = gql`
  query FilterQuery($name: String) {
    charactersByFilter(name: $name) {
      id
      name
      location {
        name
      }
      image
    }
  }
`;