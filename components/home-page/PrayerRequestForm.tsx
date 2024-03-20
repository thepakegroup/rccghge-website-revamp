"use client";
import React from "react";
import TitleBorderTop from "../TitleBorderTop";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";
import ImageFill from "@/lib/components/ImageFill";
const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  phoneNo: z
    .string()
    .refine((value) => /^\+?\d{1,3}[- ]?\d{3,}-?\d{4,}$/i.test(value), {
      message: "Please enter a valid phone number.",
    }),
  request: z
    .string()
    .min(10, {
      message: "Request must be at least 10 characters.",
    })
    .max(160, {
      message: "Request must not be longer than 30 characters.",
    }),
});

export default function PrayerRequestForm() {
  const defaultValues: z.infer<typeof formSchema> = {
    name: "",
    phoneNo: "",
    request: "",
  };
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    form.reset();
  }
  return (
    <div className="relative flex items-center  justify-center">
      <ImageFill src="/images/ourMission-img.png" />
      <div className="space-y-5 bg-white z-10 w-[min(100%,26rem)] wrapper py-10 my-5 sm:my-10 rounded-lg">
        <TitleBorderTop title="Have A Prayer Request?" className=" text-nowrap" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Phone */}
            <FormField
              control={form.control}
              name="phoneNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone No:</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Request */}
            <FormField
              control={form.control}
              name="request"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Request</FormLabel>
                  <FormControl>
                    <Textarea className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button>Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
