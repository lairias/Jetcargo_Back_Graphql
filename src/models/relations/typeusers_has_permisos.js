const {Sequelize }= require("sequelize")
import db from "../.../../db/index";

exports.MODEL_TYPEUSER_HAS_PERMISOS = db.define(
  "MOD_typeusers_has_permisos",
  {
    COD_PERMISO: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE PERMISOS",
    },
    COD_TYPEUSERS: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "THE PRIMARY KEY OF TYPE OF USER",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);
