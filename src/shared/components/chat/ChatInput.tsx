import { useState } from "react";

import { SendHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useDocumentStore } from "@/shared/store/documentStore";

type Props = {
  onSend: (message: string) => void;
  loading: boolean;
};

export function ChatInput({ onSend, loading }: Readonly<Props>) {
  const [message, setMessage] = useState("");

  const selectedDocument = useDocumentStore((state) => state.selectedDocument);

  const handleSend = () => {
    if (!message.trim()) {
      return;
    }

    onSend(message);

    setMessage("");
  };

  return (
    <div className="border-t p-6">
      <div className="flex gap-4">
        <Textarea
          value={message}
          placeholder={
            selectedDocument
              ? "Ask anything about your document..."
              : "Upload a document first..."
          }
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();

              handleSend();
            }
          }}
          disabled={loading || !selectedDocument}
        />

        <Button
          size="icon"
          onClick={handleSend}
          disabled={loading || !selectedDocument}
        >
          <SendHorizontal className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
