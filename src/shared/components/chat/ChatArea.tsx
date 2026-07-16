import { ChatHeader } from "@/shared/components/chat/ChatHeader";

import { ChatInput } from "@/shared/components/chat/ChatInput";

import { ChatMessages } from "@/features/chat/components/ChatMessages";
import { useChat } from "@/features/chat/hooks/useChat";

export function ChatArea() {
  const {
    send,

    loading,
  } = useChat();

  return (
    <main className="flex flex-1 flex-col">
      <ChatHeader />

      <ChatMessages />

      <ChatInput
        onSend={send}

        loading={loading}
      />
    </main>
  );
}
