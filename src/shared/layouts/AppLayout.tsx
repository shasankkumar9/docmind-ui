import { type PropsWithChildren } from "react";

export function AppLayout({
  children,
}: PropsWithChildren<{ children: React.ReactNode }>) {
  return (
    <div className="bg-background flex h-screen overflow-hidden">
      {children}
    </div>
  );
}
