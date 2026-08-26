import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Toaster } from "@/components/toast";
import { QueryProvider } from "@/providers/QueryProvider";
import { TelegramProvider } from "@/providers/TelegramProvider";
import { topicConfig } from "@/lib/topic.config";
import { I18nProvider } from "@/components/I18nProvider";

export const metadata: Metadata = {
  title: topicConfig.appName,
  description: `${topicConfig.appName} quiz`,
  icons: {
    icon: "/logo/tab-logo.png",
    shortcut: "/logo/tab-logo.png",
    apple: "/logo/tab-logo.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          <I18nProvider>
            <TelegramProvider>
              {children}
              <Toaster />
            </TelegramProvider>
          </I18nProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
