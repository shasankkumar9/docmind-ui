import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { sendMessage } from "@/features/chat/api/chatApi";

import { useChatStore } from "@/shared/store/chatStore";
import { useDocumentStore } from "@/shared/store/documentStore";

export function useChat() {
  const addMessage = useChatStore((state) => state.addMessage);

  const selectedDocument = useDocumentStore((state) => state.selectedDocument);

  const mutation = useMutation({
    mutationFn: sendMessage,

    onSuccess(response) {
      addMessage({
        id: crypto.randomUUID(),

        role: "assistant",

        content: response.response,

        sources: response.sources,
      });
    },

    onError(error) {
      console.error(error);

      toast.error("Failed to generate response.");
    },
  });

  function send(message: string) {
    if (!selectedDocument) {
      toast.error("Please upload and select a document.");

      return;
    }

    addMessage({
      id: crypto.randomUUID(),

      role: "user",

      content: message,
    });

    mutation.mutate({
      documentId: selectedDocument.id,

      message,
    });
  }

  return {
    send,

    loading: mutation.isPending,
  };
}
