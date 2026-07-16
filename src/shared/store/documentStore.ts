import { create } from "zustand";

import type { Document } from "@/features/documents/types/Document";

interface DocumentState {
  documents: Document[];

  selectedDocument?: Document;

  addDocument: (document: Document) => void;

  selectDocument: (document: Document) => void;
}

export const useDocumentStore = create<DocumentState>((set) => ({
  documents: [],

  selectedDocument: undefined,

  addDocument: (document) =>
    set((state) => ({
      documents: [...state.documents, document],
      selectedDocument: document,
    })),

  selectDocument: (document) =>
    set({
      selectedDocument: document,
    }),
}));
