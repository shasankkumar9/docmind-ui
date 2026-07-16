import { FileText } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { useDocumentStore } from "@/shared/store/documentStore";

import { DocumentItem } from "@/features/documents/components/DocumentItem";

export function DocumentList() {
  const documents = useDocumentStore((state) => state.documents);

  const selectedDocument = useDocumentStore((state) => state.selectedDocument);

  const selectDocument = useDocumentStore((state) => state.selectDocument);

  if (documents.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-10">
          <FileText className="text-muted-foreground mb-4 h-10 w-10" />

          <p className="text-sm font-medium">No documents uploaded</p>

          <p className="text-muted-foreground mt-2 text-center text-xs">
            Upload a TXT, PDF, DOCX or XLSX document.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {documents.map((document) => (
        <DocumentItem
          key={document.id}
          document={document}
          selected={selectedDocument?.id === document.id}
          onClick={() => selectDocument(document)}
        />
      ))}
    </div>
  );
}
