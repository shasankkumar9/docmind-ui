import { Card, CardContent } from "@/components/ui/card";

import { FileText } from "lucide-react";

import type { Source } from "@/features/chat/types/Source";

type Props = {
  source: Source;
};

export function SourceCard({ source }: Props) {
  return (
    <Card className="mt-3">
      <CardContent className="space-y-3 p-4">
        <div className="flex items-center gap-2">
          <FileText className="text-primary h-4 w-4" />

          <p className="text-sm font-semibold">Source</p>
        </div>

        <p className="text-muted-foreground text-sm leading-6">
          {source.preview}
        </p>
      </CardContent>
    </Card>
  );
}
