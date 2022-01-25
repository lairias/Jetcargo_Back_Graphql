const express = require('express');
const {graphqlHTTP} = require('express-graphql');

const schema = require('../graphql/shema');
const { USERS } = require('../models/user');
const app = express();

app.get("/", async (req,res)=>{
const user = await USERS.findAll();
    res.send( user)
})
app.use(
  "/graphql",
  graphqlHTTP({
    schema, 
    graphiql: true,
  })
);

module.exports = app;