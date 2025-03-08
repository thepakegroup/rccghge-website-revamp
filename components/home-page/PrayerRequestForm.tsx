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
import { sendPrayerRequest } from "@/app/utils/actions";
import { toast } from "sonner";
import SubmitButton from "../SubmitButton";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  mobile: z
    .string()
    .refine((value) => /^\+?\d{1,3}[- ]?\d{3,}-?\d{4,}$/i.test(value), {
      message: "Please enter a valid phone number.",
    }),
  content: z
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
    email: "",
    subject: "Prayer Request",
    mobile: "",
    content: "",
  };
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  // 2. Define a submit handler.
  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const res = await sendPrayerRequest(data);
      toast.success(res);
      form.reset();
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  }

  return (
    <div className="relative flex items-center  justify-center">
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <ImageFill src="/images/ourMission.jpg" />
      <div className="space-y-5 bg-white z-10 w-[min(90%,35rem)] wrapper py-10 my-5 sm:my-10 rounded-lg">
        <TitleBorderTop
          title="Have A Prayer Request?"
          className=" text-nowrap"
        />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="md:text-lg">
                    Name: <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input className="md:text-lg" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="md:text-lg">
                    Email Address: <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input className="md:text-lg" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Phone */}
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="md:text-lg">
                    Phone No: <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="tel" className="md:text-lg" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Request */}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="md:text-lg">
                    Request: <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea className="resize-none " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
                       <SubmitButton form={form} />

          </form>
        </Form>
      </div>
    </div>
  );
}
