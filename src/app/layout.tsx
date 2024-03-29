import type { Metadata } from "next";
import { basisgrotesque } from "@/styles/font";
import "../styles/tailwind.css"
import QueryProvider from "@/providers/Query.provider";
import { AppNotificationProvider } from "@/providers/AppNotification.provider";

export const metadata: Metadata = {
  title: "Qencode",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={basisgrotesque.className}>
        <QueryProvider>
          <AppNotificationProvider>
            {children}
          </AppNotificationProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
