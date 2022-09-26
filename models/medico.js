const sql = require("./db.js");

const Medico = function(medico) {
    this.id = medico.id;
    this.nombre = medico.nombre;
    this.especialidad = medico.especialidad;
}

Medico.getAll = (result) => {
    let query = "SELECT * FROM medico";
    sql.query(query, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("clientes: ", res);
        result(null, res);
    });
}

module.exports = Medico;