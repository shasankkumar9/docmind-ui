import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SourceCard } from "@/features/chat/components/SourceCard";
import type { Source } from "@/features/chat/types/Source";
import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

type Props = {
  role: "user" | "assistant";
  message: string;
  sources?: Source[];
};

export function ChatMessage({ role, message, sources }: Readonly<Props>) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && <Bot className="text-primary mt-2 mr-3 h-8 w-8 shrink-0" />}

      <div className="max-w-4xl">
        <div
          className={`rounded-2xl px-5 py-4 shadow-sm ${
            isUser ? "bg-primary text-primary-foreground" : "bg-muted"
          }`}
        >
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <ReactMarkdown>{message}</ReactMarkdown>
          </div>
        </div>

        {!isUser && sources && sources.length > 0 && (
          <Accordion type="single" collapsible className="mt-5">
            <AccordionItem value="sources">
              <AccordionTrigger>Sources ({sources.length})</AccordionTrigger>

              <AccordionContent>
                <div className="space-y-3">
                  {sources.map((source, index) => (
                    <SourceCard key={index} source={source} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </div>

      {isUser && <User className="mt-2 ml-3 h-8 w-8 shrink-0" />}
    </div>
  );
}
