const {Sequelize }= require("sequelize")
import db from "../.../../db/index";

exports.MODEL_HAS_PERMISOS = db.define(
  "MOD_has_permisos",
  {},
  {
    createdAt: false,
    updatedAt: false,
  }
);
