import type { Source } from "@/features/chat/types/Source";

export interface Message {
  id: string;

  role: "user" | "assistant";

  content: string;

  sources?: Source[];
}
