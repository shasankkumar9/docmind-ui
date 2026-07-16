import { FileText } from "lucide-react";

import { cn } from "@/lib/utils";

import type { Document } from "@/features/documents/types/Document";

type Props = {
  document: Document;
  selected: boolean;
  onClick: () => void;
};

export function DocumentItem({ document, selected, onClick }: Readonly<Props>) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-colors",
        "hover:bg-accent",
        selected && "border-primary bg-accent",
      )}
    >
      <FileText className="text-primary h-5 w-5 shrink-0" />

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">
          {document.originalFileName}
        </p>
      </div>
    </button>
  );
}
