const mysql = require("mysql2/promise")
async function getConnection() {
  const connection = await mysql.createConnection({
    host: "containers-us-west-51.railway.app",
    user: "root",
    password: "WsOtCVzI10pVajOVtuz8",
    database: "railway"
  })
  return connection
}

module.exports = getConnection