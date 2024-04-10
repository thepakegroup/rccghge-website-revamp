"use client";
import { getMinistries, joinUs } from "@/app/utils/actions";
import { Button } from "@/components/ui/button";
import ImageFill from "@/lib/components/ImageFill";
import useIsActiveLink from "@/lib/hooks/useIsActiveLink";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa6";
import type { Ministry } from "@/app/utils/actions";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
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
import { slideInFromBottom } from "@/app/give/page";

export default function Page({ params }: { params: { slug: string } }) {
  const [ministriesData, setMinistriesData] = React.useState<
    Ministry[] | undefined
  >();
  const isActiveLink = useIsActiveLink();
  useEffect(() => {
    (async () => {
      try {
        const res = await getMinistries(params.slug);
        console.log(res);
        setMinistriesData(res);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [params.slug]);

  return (
    <div className="page-spacing wrapper relative">
      {/* tabs */}
      <div>
        <MotionDiv
          variants={slideInFromBottom(1, 0.5)}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="z-20 bg-white absolute -top-10  mx-6 lg:mx-12  rounded-lg left-0 right-0 p-5 xl:px-32 lg:text-lg shadow-md ">
          <ul className="flex items-center justify-center gap-10 ">
            <li
              className={`${isActiveLink("/Ministry") && "border-b-2 border-primary"}`}>
              <Link href={"/ourMinistries/Ministry"}>Ministries</Link>
            </li>
            <li
              className={`${isActiveLink("/Department") && "border-b-2 border-primary"}`}>
              <Link href={"/ourMinistries/Department"}>Departments</Link>
            </li>
          </ul>
        </MotionDiv>

        {params.slug === "joinUs" ? (
          <JoinUsForm />
        ) : (
          <MotionDiv
            variants={slideInFromBottom(1, 0)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            className="ministries-card-container  w-full pt-8 gap-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start">
            {ministriesData?.map((item, i) => (
              <div
                key={i}
                className="  relative  border-2  rounded-lg w-full md:h-80  ">
                <div className="card-img relative h-[150px] ">
                  <ImageFill
                    src={`${process.env.NEXT_PUBLIC_STAGING_API_URL}/load-media/${item.banner}`}
                    className=" rounded-t-md"
                  />
                </div>
                <div className="w-10 absolute top-32 left-2  aspect-square blueGradient rounded-full flex items-center justify-center text-xl text-white">
                  <FaUsers />
                </div>

                <div className="card-content space-y-2 pt-5   p-2 flex flex-col justify-between h-1/2">
                  <div className="space-y-2">
                    <h1 className="text-xl  capitalize font-bold">
                      {item.name}
                    </h1>
                    <p className="line-clamp-2 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                  <Button asChild size={"lg"} className="w-fit mt-auto">
                    <Link href={`/ourMinistries/joinUs`}>Join Us</Link>
                  </Button>
                </div>
              </div>
            ))}
          </MotionDiv>
        )}
      </div>
    </div>
  );
}

const JoinUsForm = () => {
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
};
