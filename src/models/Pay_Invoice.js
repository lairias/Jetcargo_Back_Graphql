const {Sequelize }= require("sequelize")
const db = require("../../db/index")

exports.PAY_INVOICE = db.define(
  "PAY_Invoice",
  {
    COD_INVOICE: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE LOCKER",
    },
    COD_PEOPLE: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE SHIPPING COST",
    },
    COD_SHIPPINGCOST: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE SHIPPING COST",
    },
    COD_PAYMENTMETHOD: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE SHIPPING COST",
    },
    NUM_LOCKER: {
      type: Sequelize.STRING(60),
      allowNull: false,
      comment: "NUM OF LOCKER",
    },
    IND_LOCK: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "THE NAME OF THE USER",
    },
    TYP_LOCK: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "THE NAME OF THE USER",
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
