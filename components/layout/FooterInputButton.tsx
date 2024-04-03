"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

export default function FooterInputButton() {
  const { pending } = useFormStatus();
  const [requestSent, setRequestSent] = useState(false);

  useEffect(() => {
    if (!pending) {
      // Pending state has changed to false, indicating request completion
      setRequestSent(true);
      // Reset the request sent status after some time (optional)
      const timeout = setTimeout(() => {
        setRequestSent(false);
      }, 3000); // Change the time as per your requirement
      return () => clearTimeout(timeout);
    }
  }, [pending]);
  return (
    <Button type="submit" disabled={pending} className=" rounded-l-none  ">
      {pending ? "Sending..." : requestSent ? "Sent ✔" : "Send"}
    </Button>
  );
}
