import { create } from "zustand";

import type { Message } from "@/features/chat/types/Message";

interface ChatState {
  messages: Message[];

  loading: boolean;

  addMessage: (message: Message) => void;

  clearMessages: () => void;

  setLoading: (loading: boolean) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],

  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),

  clearMessages: () =>
    set({
      messages: [],
    }),

  loading: false,

  setLoading: (loading) =>
    set({
      loading,
    }),
}));
