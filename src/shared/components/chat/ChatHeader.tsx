import { Badge } from "@/components/ui/badge";
import { Bot } from "lucide-react";

import { useDocumentStore } from "@/shared/store/documentStore";

export function ChatHeader() {
  const selectedDocument = useDocumentStore((state) => state.selectedDocument);

  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div className="flex items-center gap-3">
        <Bot className="text-primary h-6 w-6" />

        <div>
          <h2 className="font-semibold">AI Assistant</h2>

          <p className="text-muted-foreground text-sm">
            Ask questions about your active document
          </p>
        </div>
      </div>

      <Badge variant="secondary">
        {selectedDocument
          ? selectedDocument.originalFileName
          : "No document selected"}
      </Badge>
    </header>
  );
}
