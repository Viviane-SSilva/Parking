// Exemplo de controller em TypeScript
import { Request, Response } from "express";
import { prisma } from "../config/prisma";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      res.status(500).json({ error: "Erro ao buscar usuários" });
    } else {
      res.status(500).json({ error: "Erro desconhecido" });
    }
  }
};
