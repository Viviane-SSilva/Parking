const db = require("../config/db");

const getVehicles = async ( req, res) => {
    try {
        const result = await db.query("SELECT * FROM vehicles");
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err,message);
        res.status(500).json({ error: "Erro ao buscar veículos" });
    }
};

module.exports = { getVehicles };