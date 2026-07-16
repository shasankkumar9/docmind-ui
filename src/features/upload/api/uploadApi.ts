import type { UploadResponse } from "@/features/documents/types/UploadResponse";
import { apiClient } from "@/shared/api/apiClient";

export async function uploadDocument(file: File): Promise<UploadResponse> {
  const formData = new FormData();

  formData.append("file", file);

  const response = await apiClient.post<UploadResponse>(
    "/documents",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return response.data;
}
