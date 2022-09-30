import { v4 as uuidv4 } from "uuid";
import { notes } from "../data/notes";
import { UpdateNote, Note, StatsObject } from "../types/types";
import { getDate } from "../helpers/dateFormat";
import { getDates } from "../helpers/dateParser";

const notesStore: { notes: Note[] } = {
  notes,
};

export const getAllNotes = () => notesStore.notes;

export const getNoteById = (id: string) =>
  notesStore.notes.find((note) => note.id === id) || null;

export const createNote = ({ name, category, content }: UpdateNote) => {
  const newNote: Note = {
    id: uuidv4(),
    created: getDate(),
    name,
    category,
    content,
    dates: getDates(content),
    isArchived: false,
  };

  notesStore.notes = [...notesStore.notes, newNote];

  return newNote;
};

export const updateNote = (id: string, body: UpdateNote) => {
  const note = getNoteById(id);

  if (note) {
    const { name, category, content } = note;

    note.name = body?.name || name;
    note.category = body?.category || category;
    note.content = body?.content || content;
    note.dates = getDates(note.content);

    // if (body.hasOwnProperty('isArchived')) {
    //   note.isArchived = body.isArchived;
    // }
  } else {
    throw new Error(`Note with id: ${id} does not exist`);
  }

  return note;
};

export const deleteNote = (id: string) => {
  notesStore.notes = notesStore.notes.filter((note) => note.id !== id);
};

export const getStats = () =>
  notesStore.notes.reduce((acc: StatsObject, note) => {
    const { category } = note;

    if (!acc.hasOwnProperty(category)) {
      return Object.assign(acc, {
        [category]: {
          active: note.isArchived ? 0 : 1,
          archived: note.isArchived ? 1 : 0,
        },
      });
    } else {
      note.isArchived ? acc[category].archived++ : acc[category].active++;

      return acc;
    }
  }, {});
