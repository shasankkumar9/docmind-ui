import { useRef } from "react";

import { useMutation } from "@tanstack/react-query";
import { Upload } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { uploadDocument } from "@/features/upload/api/uploadApi";

import { useDocumentStore } from "@/shared/store/documentStore";
import axios from "axios";

export function UploadButton() {
  const inputRef = useRef<HTMLInputElement>(null);

  const addDocument = useDocumentStore((state) => state.addDocument);

  const uploadMutation = useMutation({
    mutationFn: uploadDocument,

    onSuccess: (response) => {
      addDocument({
        id: response.id,
        originalFileName: response.originalFileName,
      });

      toast.success("Document uploaded successfully.");
    },

    onError: (error) => {
      console.error(error);

      if (axios.isAxiosError(error)) {
        console.error(error.response?.data);

        toast.error(
          error.response?.data?.message ?? "Failed to upload document.",
        );
      } else {
        toast.error("Failed to upload document.");
      }
    },
  });

  const handleSelectFile = () => {
    inputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    uploadMutation.mutate(file);

    event.target.value = "";
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        hidden
        accept=".txt,.pdf,.docx,.xlsx"
        onChange={handleFileChange}
      />

      <Button
        className="w-full"
        onClick={handleSelectFile}
        disabled={uploadMutation.isPending}
      >
        <Upload className="mr-2 h-4 w-4" />

        {uploadMutation.isPending ? "Uploading..." : "Upload Document"}
      </Button>
    </>
  );
}
