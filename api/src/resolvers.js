/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    User: async (_, {input}, { models }) => {
      // Fetch user from database
      // const {id, username} = input
      const user = await models.User.findOne({ input });

      // If no user found, throw an error
      if (!user) {
        throw new Error('User not found');
      }

      // Return the user
      return user;
    },
    Pets: async (_, {input}, {models}) => {
      const query = {};
      // if (name) query.name = name;
      // if (type) query.type = type;
    
      const pets = await models.Pet.findMany(input);
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
  Mutation: {
    newPet: async (_, {input}, {models}) => {
      const pet = await models.Pet.create(input)
      return pet
    },
    newUser: async (_, {input}, {models}) => {
      const user = await models.User.create(input)
      return user
    },
    deleteUser: async (_, {input}, {models}) => {
      const user = await models.User.deleteUser(input)
      return user
    },
    deletePet: async (_, {name}, {models} ) => {
      const pet = await models.Pet.deletePet(name)
      return pet
    }
    
  },
  Pet: {
    user(_, __, {models, user}) {
      return user

    }
    // img(pet) {
    //   return pet.type === 'DOG'
    //     ? 'https://placedog.net/300/300'
    //     : 'http://placekitten.com/300/300'
    // }
  },
  User: {
    async pets(user,_, {models}) {
      console.log('user: ', user);
      // const pet = await models.Pet.findOne({ "user.id": user.id });
      // const pet = await models.Pet.findOne((pet) => pet.user.id === user.id)
      // const pet = await models.Pet.findOne((pet) => pet.user.id === "46ycTobse249iZDspxvjV")

      const query = {};
      // if (name) query.name = name;
      // if (type) query.type = type;
      query.user = {}
      query.user.id = user.id

      const pets = await models.Pet.findMany(query)
      // const pets = await models.Pet.findMany()
      console.log('pets: ', pets);


      if (!pets) {
        throw new Error('Pet nots found');
      }

      return pets
      // return [{id: 5, name: 'wnos'}]
      
    }
  }
}
