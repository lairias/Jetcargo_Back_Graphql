const {Sequelize }= require("sequelize")
const db = require("../../db/index")

exports.LOG_ERROR = db.define(
  "LOG_Error",
  {
    COD_ERROR: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE ERROR",
    },
    DES_ERROR: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: "DESCRIPTION OF ERROR",
    },
    HTTP_ERROR: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: "METHODO OF HTTP",
    },
    STATUS_ERROR: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: "STATUS OF ERROR",
    },
    DAT_ADD: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      comment: "DATE THAT THIS ROW WERE ADDED",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);
