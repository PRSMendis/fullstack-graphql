const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    type 
    type User {
        id: ID!
        username: String!
    }
    
    type Pet {
        id: ID!
        createdAt: String!
        name: String!
        type: String!
    }
    input PetInput {
        name: String
        breed: String
    }

    input UserInput {
        id: ID
        username: String
    }
    type Query {
        Users: [User]!
        Pets: [Pet]!
        User: User!
        Pet: [Pet]!
    }

    # type Mutation {

    # }
`;

module.exports = typeDefs
