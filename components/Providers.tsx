"use client";

import { LanguageProvider } from "@/contexts/LanguageContext";
import DynamicLang from "@/components/DynamicLang";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <DynamicLang />
      {children}
    </LanguageProvider>
  );
}
