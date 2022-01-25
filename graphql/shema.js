const {GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql')
const { Users } = require("../graphql/queries");
const { register } = require('./mutation');

const QueryType = new GraphQLObjectType({
  name: "QueryType",
  fields: {
    Users,
  },
});


const MutationType = new GraphQLObjectType({
  name: "MutationType",
  fields:{
      register
  }
});
module.exports=  new GraphQLSchema({ 
    query : QueryType,
    mutation: MutationType
})

