"use client";
import { sendPrayerRequest } from "@/app/utils/actions";
import SubmitButton from "@/components/SubmitButton";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

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

export default function PageForm() {
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
      // Call the server function when the form is submitted.
      const res = await sendPrayerRequest(data);
      toast.success(res);
      form.reset();
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="md:text-lg">Name</FormLabel>
              <FormControl>
                <Input {...field} className="md:text-lg" />
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
  );
}
