import { ChatArea } from "@/shared/components/chat/ChatArea";
import { Sidebar } from "@/shared/components/sidebar/Sidebar";
import { AppLayout } from "@/shared/layouts/AppLayout";

export function HomePage() {
  return (
    <AppLayout>
      <Sidebar />
      <ChatArea />
    </AppLayout>
  );
}
