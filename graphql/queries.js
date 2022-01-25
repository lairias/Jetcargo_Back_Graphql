const {  GraphQLString, GraphQLList } = require("graphql");
const {USERS} = require("../models/user");
const { UserType } = require("./type");

const Users = {
  type: new  GraphQLList(UserType),
  async resolve (){
return await USERS.findAll()
  }
}

module.exports = { Users };
