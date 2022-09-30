import * as yup from "yup";

export const noteCreateSchema = yup.object().shape({
  name: yup.string().min(3).max(25).required(),
  category: yup.string().oneOf(["Idea", "Random thought", "Task"]).required(),
  content: yup.string().min(5).max(50).required(),
});

export const noteUpdateSchema = yup.object().shape({
  name: yup.string().min(3).max(25),
  category: yup.string().oneOf(["Idea", "Random thought", "Task"]),
  content: yup.string().min(5).max(50),
  isArchived: yup.boolean(),
});

export const idSchema = yup.object({
  noteId: yup.string().required(),
});

export type NoteUpdateSchema = typeof noteUpdateSchema;
export type NoteCreateSchema = typeof noteCreateSchema;
