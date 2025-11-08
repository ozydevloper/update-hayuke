"use client";
import { Button } from "@/components/ui/button";

// Error boundaries must be Client Components

export default function GlobalError({ error, reset }) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <div className="w-full h-dvh flex items-center justify-center">
          <div className="font-bold text-sm text-primary">
            Sepertinya ada masalah di server
          </div>
          <Button onClick={() => reset()}>Refresh</Button>
        </div>
      </body>
    </html>
  );
}
