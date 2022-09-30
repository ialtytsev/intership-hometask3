export interface Note {
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
  isArchived: boolean;
}

export interface UpdateNote {
  name: string;
  category: string;
  content: string;
  isArchived?: boolean;
}

export interface StatsObject {
  [key: string]: {
    active: number;
    archived: number;
  };
}
