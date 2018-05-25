import gql from "graphql-tag";

export const SIGNUP_MUTATION = gql`
mutation($email: String!, $username: String!, $password: String!){
    signup(email:$email,password:$password,username:$username){
      id
      email
      username
      tokens{
        device
        id
        ip
        tokenHash
      }
    }
  }
`

export const LOGOUT = gql`
mutation{
    logout{
        id
        email
        username
    }
}
`

export const LOGIN = gql`
mutation($email: String!, $password: String!){
    login(email:$email,password:$password){
      id
      email
      username
      tokens{
        device
        id
        tokenHash
        ip
      }
    }
  }
`

export const CHECK_TOKEN = gql`
{
  check {
    id
    tokens{
        ip
        id
        tokenHash
        device
    }
    username
    email
  }
}
`