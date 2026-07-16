import { apiClient } from "@/shared/api/apiClient";

import type { ChatRequest } from "@/features/chat/types/ChatRequest";
import type { ChatResponse } from "@/features/chat/types/ChatResponse";

export async function sendMessage(request: ChatRequest): Promise<ChatResponse> {
  const response = await apiClient.post<ChatResponse>("/chat", request);

  return response.data;
}
