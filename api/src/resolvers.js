/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    User: async (_, __, { models }) => {
      // Fetch user from database
      const user = await models.User.findOne();

      // If no user found, throw an error
      if (!user) {
        throw new Error('User not found');
      }

      // Return the user
      return user;
    },
    Pets: async (_, __, {models}) => {
      // const pet = await models.Pet.findOne();
      const pet = await models.Pet.findMany();

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
