"use client";
import { slideInFromBottom } from "@/app/give/page";
import { joinUs } from "@/app/utils/actions";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MotionDiv } from "@/lib/framer-motion/motionComponents";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export default function JoinUsForm() {
  const formSchema = z.object({
    name: z.string().min(2, {
      message: "name must be at least 2 characters.",
    }),
    mobile: z
      .string()
      .refine((value) => /^\+?\d{1,3}[- ]?\d{3,}-?\d{4,}$/i.test(value), {
        message: "Please enter a valid phone number.",
      }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
  });
  const defaultValues: z.infer<typeof formSchema> = {
    name: "",
    mobile: "",
    email: "",
  };
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await joinUs(values);

      toast.success(res);
      form.reset();
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  }
  return (
    <MotionDiv
      variants={slideInFromBottom(1, 0.5)}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      className=" lg:max-w-3xl wrapper  items-center w-full">
      <div className=" space-y-5  md:space-y-8 pb-10 text-center">
        <h1 className="text-xl md:text-2xl">Thank You For Showing Interest!</h1>
        <p className="  md:text-lg">
          Interested in receiving our newsletter? Please fill out the form below
          and we will be in touch soon!
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="md:text-lg">
                  Name:<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input className="md:text-lg" {...field} />
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
                  Phone No:<span className="text-red-500">*</span>
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

          <Button size="lg" className=" active:scale-90 w-3/12 md:text-lg">
            Submit
          </Button>
        </form>
      </Form>
    </MotionDiv>
  );
}
