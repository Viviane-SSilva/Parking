import { clientDB } from "../config/db.js";

export const getVehicles = async (req, res) => {
    try {
        const result = await clientDB.query("SELECT * FROM vehicles");
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Erro ao buscar veículos" });
    }
};