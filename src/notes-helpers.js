export const findFolder = (folders = [], folderId) =>
  folders.find((folder) => folder.id === folderId);

export const findNote = (notes = [], noteId) =>
  notes.find((note) => parseInt(note.id) === parseInt(noteId));

export const getNotesForFolder = (notes = [], folderId) =>
  !folderId
    ? notes
    : notes.filter((note) => parseInt(note.folder_id) === parseInt(folderId));

export const countNotesForFolder = (notes = [], folderId) =>
  notes.filter((note) => note.folder_id === folderId).length;
