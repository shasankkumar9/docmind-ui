import { DocumentList } from "@/features/documents/components/DocumentList";
import { UploadButton } from "@/features/upload/components/UploadButton";
import { Brain } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="bg-muted/20 flex h-full w-64 flex-col border-r">
      {/* Header */}

      <div className="border-b px-6 py-5">
        <div className="flex items-center gap-3">
          <Brain className="text-primary h-8 w-8" />

          <div>
            <h1 className="text-lg font-bold">DocMind AI</h1>

            <p className="text-muted-foreground text-sm">
              AI Document Assistant
            </p>
          </div>
        </div>
      </div>

      {/* Upload */}

      <div className="p-4">
        <UploadButton />
      </div>

      {/* Document List */}

      <div className="flex-1 overflow-y-auto px-4">
        <h2 className="text-muted-foreground mb-3 text-sm font-semibold">
          Documents
        </h2>

        <DocumentList />
      </div>

      {/* Footer */}

      <footer className="border-t px-6 py-4">
        <div className="text-center">
          <p className="text-xs font-medium">DocMind AI</p>

          <p className="text-muted-foreground text-xs">Version 1.0.0</p>
        </div>
      </footer>
    </aside>
  );
}
