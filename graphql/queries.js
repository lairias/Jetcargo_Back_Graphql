const {  GraphQLString, GraphQLList } = require("graphql");
const {USERS} = require("../src/models/Users");
const {PA_CITIES} = require("../src/models/Pa_cities");
const { UserType, CityType} = require("./type");

const Users = {
  type: new  GraphQLList(UserType),
  async resolve (){
return await USERS.findAll()
  }
}
const City = {
  type: new GraphQLList(CityType),
  async resolve() {
    return await PA_CITIES.findAll();
  },
};

module.exports = { Users, City };
