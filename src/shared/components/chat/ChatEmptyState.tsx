import { Brain } from "lucide-react";

export function ChatEmptyState() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-8">
      <Brain className="text-primary mb-6 h-16 w-16" />

      <h1 className="text-3xl font-bold tracking-tight">
        Welcome to DocMind AI
      </h1>

      <p className="text-muted-foreground mt-3 max-w-md text-center">
        Upload a document and ask questions using AI-powered semantic search.
        DocMind retrieves the most relevant information from your document and
        provides contextual answers with source citations.
      </p>
    </div>
  );
}
