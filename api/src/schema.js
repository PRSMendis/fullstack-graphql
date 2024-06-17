const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        pets: [Pet]
    }
    
    type Pet {
        id: ID!
        createdAt: String!
        name: String!
        type: String!
        user: User!
    }
    input PetInput {
        name: String
        type: String
    }

    input UserInput {
        id: ID
        username: String
    }
    type Query {
        Users: [User]!
        Pets(input: PetInput): [Pet]!
        User(input: UserInput): User!
        Pet(name: String!): Pet!
    }

    type Mutation {
        newPet(input: PetInput): Pet!
        newUser(input: UserInput): User!
        deletePet(name: String!) : Pet!
        deleteUser(input: UserInput): User!
    }
`;

module.exports = typeDefs
