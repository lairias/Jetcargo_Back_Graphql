const {GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLDate,
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: {
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
});
const CityType = new GraphQLObjectType({
  name: "CityType",
  fields: {
    COD_CITY: { type: GraphQLID },
    COD_STATE: { type: GraphQLID },
    NAM_CITY: { type: GraphQLString },
    ZIP_CODE: { type: GraphQLString },
    POS_CODE: { type: GraphQLString },
    POPULATION: { type: GraphQLString },
    CURRENCY: { type: GraphQLString },
    TIMEZONE: { type: GraphQLString },
    DES_CITY: { type: GraphQLString },
    USR_ADD: { type: GraphQLString },
    USR_UPD: { type: GraphQLString },
    DAT_ADD: { type: GraphQLString },
    DAT_UPD: { type: GraphQLString },
  },
});

module.exports = { UserType, CityType };