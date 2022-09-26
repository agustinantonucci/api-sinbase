const getConnection = require("../config/db.js")

const getAll = async () => {

    const connection = await getConnection()
  
    return connection.execute(
      "select * from medico;"
    )
  }

module.exports = {
    getAll
}