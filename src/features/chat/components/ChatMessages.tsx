import { useEffect, useRef } from "react";

import { ChatEmptyState } from "@/shared/components/chat/ChatEmptyState";

import { ChatMessage } from "@/features/chat/components/ChatMessage";
import { TypingIndicator } from "@/features/chat/components/TypingIndicator";
import { useChat } from "@/features/chat/hooks/useChat";

import { useChatStore } from "@/shared/store/chatStore";

export function ChatMessages() {
  const messages = useChatStore((state) => state.messages);

  const { loading } = useChat();

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  if (messages.length === 0 && !loading) {
    return <ChatEmptyState />;
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 p-6">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            role={message.role}
            message={message.content}
            sources={message.sources}
          />
        ))}

        {loading && <TypingIndicator />}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
