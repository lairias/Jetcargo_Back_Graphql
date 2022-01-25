const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");


const UserType = new GraphQLObjectType({
    name: "UserType",
    fields:{
        COD_PEOPLE : {type: GraphQLID},
        EMAIL : {type: GraphQLString},
        PAS_USER : {type: GraphQLString},
    }
})

module.exports = {UserType}