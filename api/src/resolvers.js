/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    User: async (_, {input}, { models }) => {
      // Fetch user from database
      const {id, username} = input
      const user = await models.User.findOne({ id });

      // If no user found, throw an error
      if (!user) {
        throw new Error('User not found');
      }

      // Return the user
      return user;
    },
    Pets: async (_, {input}, {models}) => {
      const query = {};
      if (input.name) query.name = input.name;
      if (input.type) query.type = input.type;
    
      const pets = await models.Pet.findMany(query);
      return pets;
    },
    Pet:  async (_, {name}, {models}) => {
      const pet = await models.Pet.findOne((pet) => pet.name === name)

      if (!pet) {
        throw new Error('Pet not found');
      }

      return pet
    } 
  },
  // Mutation: {
    
  // },
  // Pet: {
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   }
  // },
  User: {
    
  }
}
