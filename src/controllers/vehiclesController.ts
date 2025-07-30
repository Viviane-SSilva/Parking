import { prisma } from "../config/prisma";
import { Request, Response } from "express";

export const getVehicles = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await prisma.user.findUnique({
            where: {
                id: 1
            }
        });
        res.status(200).json(result);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            res.status(500).json({ error: "Erro ao buscar veículos" });
        } else {
            res.status(500).json({ error: "Erro desconhecido" });
        }
    }
};
