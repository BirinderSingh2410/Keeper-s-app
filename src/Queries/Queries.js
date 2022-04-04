import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation ($id: String!, $name: String!) {
    insert_newUser_keeper(objects: { id: $id, name: $name }) {
      returning {
        id
        name
      }
    }
  }
`;
export const GET_ALL_DATA = gql`
  query{
    notes_data{
      id
      title
      description
      color
      gmail_id
    }
  }
`
export const GET_ID_DATA = gql`
  query($gmailId:String!) {
    notes_data(where:{gmail_id:{_eq:$gmailId}}){
      id
      title
      description
      color
      gmail_id
    }
  }
`;

export const INSERT_DATA = gql`
  mutation (
    $title: String!
    $description: String!
    $color: String!
    $id: Int!
    $gmailId: String!
  ) {
    insert_notes_data(
      on_conflict:{constraint:notes_data_pkey,where:{gmail_id:{_eq:$gmailId}}},
      objects: {
        id: $id
        gmail_id: $gmailId
        title: $title
        color: $color
        description: $description
      }
    ) {
      returning {
        id
        title
        description
        color
        gmail_id
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
