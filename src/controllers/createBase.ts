import { Request, Response } from "express";

export const createBase = async (req: Request, res: Response) => {
  try {
    res.json({ message: "Hello world" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
