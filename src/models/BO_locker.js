const {Sequelize }= require("sequelize")
const db = require("../../db/index")

exports.BO_LOCKER = db.define(
  "BO_Loker",
  {
    COD_LOCKER: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE LOCKER",
    },

    COD_PEOPLE: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE PEOPLE",
    },

    NUM_LOCKER: {
      type: Sequelize.STRING(60),
      allowNull: false,
      comment: "NUM OF LOCKER",
    },

    IND_LOCKER: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "STATUS OF LOCKER",
    },

    TYP_LOCKER: {
      type: Sequelize.STRING(80),
      allowNull: false,
      comment: "TYPE OF LOCKER",
    },

    USR_ADD: {
      type: Sequelize.STRING(30),
      allowNull: false,
      comment: "USER THAT ADDED THIS ROW	",
    },
    USR_UPD: {
      type: Sequelize.STRING(30),
      comment: "USER WHO MODIFIED THIS ROW	",
    },
    DAT_ADD: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      comment: "DATE THAT THIS ROW WERE ADDED	",
    },
    DAT_UPD: {
      type: Sequelize.DATE,
      comment: "DATE THIS ROW WAS MODIFIED	",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);
