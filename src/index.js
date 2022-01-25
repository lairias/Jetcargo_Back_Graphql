const db = require("../db");
const app = require("./app")

const main = async()=>{
   db.authenticate()
     .then(() => console.log("Conectado a la base de datos"))
     .catch((error) => console.log(error));
   await  app.listen(3000, ()=> console.log("Server port 3000"))
}

main()
