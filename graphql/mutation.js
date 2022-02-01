const {
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLDate,
} = require("graphql");

const register = {
  type: GraphQLString,
  description: "new user",
  args: {
    COD_USER: { type: GraphQLID },
    COD_PEOPLE: { type: GraphQLID },
    EMAIL: { type: GraphQLString },
    EMAIL_VERIFIED: { type: GraphQLBoolean },
    PAS_USER: { type: GraphQLString },
    API_TOKEN: { type: GraphQLString },
    IND_USR: { type: GraphQLBoolean },
    IND_INS: { type: GraphQLBoolean },
    USR_ADD: { type: GraphQLString },
    USR_UPD: { type: GraphQLString },
    DAT_ADD: { type: GraphQLString },
    DAT_UPD: { type: GraphQLString },
  },
  resolve(_, args) {
    console.log(args);
    return "New";
  },
};


module.exports = {
     register
}