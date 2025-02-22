"use client";
import { joinUs } from "@/app/utils/actions";
import { getMinistriesSlug } from "@/app/utils/api-request";
import SubmitButton from "@/components/SubmitButton";
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
import ImageFill from "@/lib/components/ImageFill";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export default function JoinUsForm({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const formSchema = z.object({
    name: z.string().min(2, {
      message: "name must be at least 2 characters.",
    }),
    mobile: z
      .string()
      .refine((value) => /^\+?\d{1,3}[- ]?\d{3,}-?\d{4,}$/i.test(value), {
        message: "Please enter a valid phone number.",
      }),
    address:z.string().min(5,{message:"Please enter a valid address"}),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    ministry: z.string(),
  });
  const defaultValues: z.infer<typeof formSchema> = {
    name: "",
    mobile: "",
    email: "",
    address: "",
    ministry: "",
  };
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });
  const [slugArr, setSlugArr] = useState<{ slug: string; name: string }[]>();
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  // effect to get the slug /name pair array
  useEffect(() => {
    (async () => {
      try {
        const res = await getMinistriesSlug(params.category);
        setSlugArr(res);
        // Find the index of the current slug in slugAr
        const index = res?.findIndex((item) => item?.slug === params?.slug);
        setCurrentIndex(index ?? -1);
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    })();
  }, [params.category, params.slug]);

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await joinUs({
        ...values,
        ministry: slugArr?.[currentIndex]?.name ?? "",
      });

      toast.success(res);
      form.reset();
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  }
  return (
    <div className=" relative flex items-center  justify-center">
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <ImageFill src="/images/ourMission-img.png" />
      <div className="space-y-5 bg-white z-10 w-[min(90%,35rem)] wrapper py-10 my-5 sm:my-10 rounded-lg">
        <div className=" space-y-5 text-center">
          <h1 className="text-xl md:text-2xl">
            Thank You For Showing Interest!
          </h1>
          <p className="  md:text-lg">Please enter your information below </p>
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
            {/* address */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="md:text-lg">
                    Address: <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input className="md:text-lg"  {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* ministry */}
            <FormField
              control={form.control}
              name="ministry"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className="md:text-lg hidden" {...field} />
                  </FormControl>
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
