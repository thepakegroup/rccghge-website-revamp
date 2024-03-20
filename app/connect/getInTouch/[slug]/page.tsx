import React from "react";
import { z } from "zod";

export default function Page({ params }: { params: { slug: string } }) {
  return <div></div>;
}

const Connect = () => {
  const formSchema = z.object({
    name: z.string().min(2, {
      message: "name must be at least 2 characters.",
    }),
    phoneNo: z
      .string()
      .refine((value) => /^\+?\d{1,3}[- ]?\d{3,}-?\d{4,}$/i.test(value), {
        message: "Please enter a valid phone number.",
      }),
    address: z.string().min(2, {
      message: "name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    dob: z.date({
      required_error: "A date of birth is required.",
    }),
    marriageStatus: z.enum(["single", "married", "divorced", "widowed"]),
    isOnline: z.enum(["in-person", "online"]),
    impression: z
      .string()
      .min(10, {
        message: "Request must be at least 10 characters.",
      })
      .max(160, {
        message: "Request must not be longer than 30 characters.",
      }),
    
  });
};
