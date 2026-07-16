import { Bot } from "lucide-react";

export function TypingIndicator() {
  return (
    <div className="flex gap-4">
      <Bot className="text-primary mt-1 h-8 w-8" />

      <div className="bg-muted rounded-xl px-5 py-4">
        <div className="flex gap-2">
          <div className="bg-primary h-2 w-2 animate-bounce rounded-full" />

          <div className="bg-primary h-2 w-2 animate-bounce rounded-full [animation-delay:150ms]" />

          <div className="bg-primary h-2 w-2 animate-bounce rounded-full [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}
