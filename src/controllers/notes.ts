import { RequestHandler } from "express";
import { findNote } from "../services/notes";
import * as notesRepository from "../repositories/notes";

export const getNote: RequestHandler = (req, res) => {
  const note = findNote(req);

  if (note) {
    res.send(note);
  } else {
    res.status(404);
  }

  res.send(note);
};

export const getNotes: RequestHandler = (req, res) => {
  res.send(notesRepository.getAllNotes());
};

export const createNote: RequestHandler = (req, res) => {
  const { name, category, content } = req.body;

  const note = notesRepository.createNote({ name, category, content });

  res.status(201);
  res.send(note);
};

export const updateNote: RequestHandler = (req, res) => {
  const { noteId } = req.params;
  let note = findNote(req);

  if (note) {
    note = notesRepository.updateNote(noteId, req.body);
    res.send(note);
  } else {
    res.status(404);
  }
};

export const deleteNote: RequestHandler = (req, res) => {
  const note = findNote(req);

  if (note) {
    notesRepository.deleteNote(req.params.noteId);
    res.sendStatus(204);
  } else {
    res.status(404);
    return;
  }
};

export const getStats: RequestHandler = (req, res) => {
  const notes = notesRepository.getAllNotes();

  if (notes) {
    res.send(notesRepository.getStats());
  } else {
    res.status(404);
    return;
  }
};
