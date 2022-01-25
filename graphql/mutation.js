const { GraphQLString, GraphQLID } = require("graphql");

const register = {
  type: GraphQLString,
  description: "new user",
  args: {
    COD_PEOPLE: { type: GraphQLID },
    EMAIL: { type: GraphQLString },
    PAS_USER: { type: GraphQLString },
  },
  resolve(_, args) {
      console.log(args)
      return "New"
  },
};


module.exports = {
     register
}