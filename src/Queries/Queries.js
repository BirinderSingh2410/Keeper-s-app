import { gql, useMutation } from "@apollo/client";

export const GET_DATA = gql`
  query MyQuery {
    notes_data {
      id
      title
      description
      color
    }
  }
`;

export const INSERT_DATA = gql`
  mutation (
    $title: String!
    $description: String!
    $color: String!
    $id: Int!
  ) {
    insert_notes_data(
      objects: {
        title: $title
        description: $description
        color: $color
        id: $id
      }
    ) {
      returning {
        title
        description
        color
      }
    }
  }
`;

export const DELETE_DATA = gql`
  mutation ($id: Int_comparison_exp!) {
    delete_notes_data(where: { id: $id }) {
      affected_rows
    }
  }
`;
export const UPDATE_DATA = gql`
  mutation (
    $id: Int!
    $title: String!
    $description: String!
    $color: String!
  ) {
    update_notes_data(
      where: { id: { _eq: $id } }
      _set: { color: $color, title: $title, description: $description }
    ) {
      returning {
        title
        description
        color
      }
    }
  }
`;
