import { Request } from "express";
import { getNoteById } from "../repositories/notes";

export const findNote = (req: Request) => {
  const { noteId } = req.params;

  return getNoteById(noteId);
};
