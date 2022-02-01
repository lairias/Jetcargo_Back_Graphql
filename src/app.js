const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const sequelize = require('../db/index')

const schema = require('../graphql/shema');
const { USERS } = require('../src/models/Users');
const app = express();

app.get("/", async (req,res)=>{
const user = await sequelize.query("SELECT * FROM users");
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