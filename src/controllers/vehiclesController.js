import { prisma } from "../config/prisma.js";

export const getVehicles = async (req, res) => {
    try {
        const result = await prisma.user.findUnique({
            where: {
                id: 1
            }
        })
        res.status(200).json(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Erro ao buscar veículos" });
    }
};