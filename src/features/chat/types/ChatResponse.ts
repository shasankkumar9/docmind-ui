import type { Source } from "@/features/chat/types/Source";

export interface ChatResponse {
  response: string;
  sources: Source[];
}
