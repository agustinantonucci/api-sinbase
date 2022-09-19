const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");
import { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT } from "../config.js";

// Create a connection to the database
const connection = mysql.createConnection({
  host: "containers-us-west-51.railway.app",
  user: "root",
  password: "WsOtCVzI10pVajOVtuz8",
  database: "railway"
});
// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});
module.exports = connection;

const sql= require()