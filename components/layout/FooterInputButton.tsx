"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function FooterInputButton() {
  const { pending } = useFormStatus();
  const [requestSent, setRequestSent] = useState(false);

  // Reset requestSent after 3 seconds
  useEffect(() => {
    if (requestSent) {
      const timer = setTimeout(() => setRequestSent(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [requestSent]);

  // This ensures the "Sent" message appears only after submission completes
  useEffect(() => {
    if (!pending && requestSent === false) {
      setRequestSent(true);
    }
  }, [pending]);

  return (
    <Button
      type="submit"
      disabled={pending}
      className="rounded-l-none h-full gap-2 transition-all">
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : requestSent ? (
        <>
          <CheckCircle2 className="h-4 w-4" />
          Sent
        </>
      ) : (
        "Send"
      )}
    </Button>
  );
}