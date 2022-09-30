import express, { json } from "express";
import { noteValidator, idValidator } from "../middleware/notesValidators";
import { noteCreateSchema, noteUpdateSchema } from "../models/noteModel";
import {
  getNote,
  getNotes,
  createNote,
  updateNote,
  deleteNote,
  getStats,
} from "../controllers/notes";

export const router = express.Router();

router.get("/", getNotes);
router.get("/stats", getStats);
router.get("/:noteId", getNote);

router.post("/", json(), noteValidator(noteCreateSchema), createNote);

router.patch(
  "/:noteId",
  json(),
  noteValidator(noteUpdateSchema),
  idValidator(),
  updateNote
);

router.delete("/:noteId", deleteNote);
