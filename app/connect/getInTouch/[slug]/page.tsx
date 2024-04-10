"use client";
import { slideInFromBottom } from "@/app/give/page";
import {
  connectWithUs,
  sendQuestion,
  subscribeNewsletter,
} from "@/app/utils/actions";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MotionDiv } from "@/lib/framer-motion/motionComponents";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaChevronDown } from "react-icons/fa6";
import { toast } from "sonner";
import { z } from "zod";

export default function Page({ params }: { params: { slug: string } }) {
  let page;
  switch (params.slug) {
    case "connect":
      page = <Connect />;
      break;
    case "question":
      page = <Question />;
      break;
    case "newsletter":
      page = <Newsletter />;
      break;

    default:
      notFound();
      break;
  }
  return (
    <MotionDiv
      variants={slideInFromBottom(1, 0)}
      initial="hidden"
      whileInView="visible"
      className="w-full flex justify-center page-spacing">
      {page}
    </MotionDiv>
  );
}

const Connect = () => {
  const contactMeAbout = [
    {
      id: "upcomingEvents",
      label: "Upcoming Events",
    },
    {
      id: "devotionals",
      label: "Devotionals",
    },
    {
      id: "outreach",
      label: "Outreach",
    },
    {
      id: "donations",
      label: "Donations",
    },
  ] as const;
  const signUpFor = [
    {
      id: "evangelism",
      label: "Evangelism",
    },
    {
      id: "volunteerService",
      label: "Volunteer Service",
    },
    {
      id: "ourNewsletter",
      label: "Our Newsletter",
    },
  ] as const;

  const formSchema = z.object({
    name: z.string().min(2, {
      message: "name must be at least 2 characters.",
    }),
    mobile: z
      .string()
      .refine((value) => /^\+?\d{1,3}[- ]?\d{3,}-?\d{4,}$/i.test(value), {
        message: "Please enter a valid phone number.",
      }),
    address: z.string().min(2, {
      message: "name must be at least 2 characters.",
    }),
    gender: z.enum(["MALE", "FEMALE"]),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    birthdate: z.date({
      required_error: "A date of birth is required.",
    }),
    marital_status: z.enum(["SINGLE", "MARRIED", "DIVORCED", "WIDOWED"]),
    attended_service_as: z.enum(["In-Person", "Online"]),
    first_impression: z
      .string()
      .min(10, {
        message: "Impression must be at least 10 characters.",
      })
      .max(160, {
        message: "Impression must not be longer than 30 characters.",
      }),
    contact_about: z
      .array(z.string())
      .refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
      }),
    sign_me_up_for: z
      .array(z.string())
      .refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
      }),
    prayer_request: z
      .string()
      .min(10, {
        message: "Request must be at least 10 characters.",
      })
      .max(160, {
        message: "Request must not be longer than 30 characters.",
      }),
  });
  const defaultValues: z.infer<typeof formSchema> = {
    name: "",
    mobile: "",
    address: "",
    gender: "MALE",
    email: "",
    birthdate: new Date(),
    marital_status: "SINGLE",
    attended_service_as: "In-Person",
    first_impression: "",
    contact_about: [],
    sign_me_up_for: [],
    prayer_request: "",
  };
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
    } as const;
    const newObj = {
      ...values,
      contact_about: values.contact_about.join(", "),
      sign_me_up_for: values.sign_me_up_for.join(", "),
      birthdate: values.birthdate.toLocaleDateString("en-US", options),
    };

    try {
      const res = await connectWithUs(newObj);
      toast.success(res);
      form.reset();
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  }

  return (
    <div className="space-y-5  md:space-y-10   lg:max-w-3xl bg-white  w-full wrapper  rounded-lg ">
      <div className="space-y-5">
        <h1 className="text-xl md:text-2xl">Kindly Fill The Following</h1>
        <p className="  md:text-lg">
          New here? You&apos;ve come to the right place. Please fill out the
          form below and we will be in touch soon!
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
                  Name: <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} className="md:text-lg" />
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
                  Active Phone No: <span className="text-red-500">*</span>
                </FormLabel>
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
                  <Input type="email" {...field} className="md:text-lg" />
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
                  address <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} className="md:text-lg" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* gender */}
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="md:text-lg">Gender: </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="md:text-lg">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem className="md:text-lg" value="MALE">
                      Male
                    </SelectItem>
                    <SelectItem className="md:text-lg" value="FEMALE">
                      Female
                    </SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* dob */}
          <FormField
            control={form.control}
            name="birthdate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="md:text-lg">
                  Date of Birth <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    {...field}
                    className="md:text-lg"
                    onChange={(e) => {
                      const date = new Date(e.target.value);
                      field.onChange(date);
                    }}
                    value={
                      field.value instanceof Date
                        ? field.value.toISOString().split("T")[0]
                        : field.value
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* marriage Status */}

          <FormField
            control={form.control}
            name="marital_status"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="md:text-lg">Marriage Status: </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="md:text-lg">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {/* "single" | "married" | "divorced" | "widowed" */}
                    <SelectItem className="md:text-lg" value="SINGLE">
                      Single
                    </SelectItem>
                    <SelectItem className="md:text-lg" value="MARRIED">
                      Married
                    </SelectItem>
                    <SelectItem className="md:text-lg" value="DIVORCED">
                      Divorced
                    </SelectItem>
                    <SelectItem className="md:text-lg" value="WIDOWED">
                      Widowed
                    </SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* attended service? */}

          <FormField
            control={form.control}
            name="attended_service_as"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="md:text-lg">
                  Did you attend service today in-person or online?
                  <span className="text-red-500">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="md:text-lg">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem className="md:text-lg" value="In-Person">
                      In-person
                    </SelectItem>
                    <SelectItem className="md:text-lg" value="Online">
                      Online
                    </SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* impression */}
          <FormField
            control={form.control}
            name="first_impression"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="md:text-lg">
                  Impression <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea className="resize-none " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Contact me about*/}
          <Collapsible>
            <FormField
              control={form.control}
              name="contact_about"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="md:text-lg">
                      Please contact me about{" "}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                  </div>
                  <CollapsibleTrigger className="flex items-center justify-between border w-full h-10 rounded px-4">
                    <span></span>
                    <FaChevronDown className="text-xs text-gray-400" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-5">
                    {contactMeAbout.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="contact_about"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row w-full items-center justify-between space-x-3 px-4 space-y-2 border rounded py-1">
                              <FormLabel className="md:text-lg">
                                <p>{item.label}</p>
                              </FormLabel>
                              <FormControl>
                                <Checkbox
                                  className=" size-4"
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked: boolean) => {
                                    return checked
                                      ? field.onChange([
                                          ...(field.value || []),
                                          item.id,
                                        ]) // Provide a default value of an empty array if field.value is undefined
                                      : field.onChange(
                                          (field.value || []).filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </CollapsibleContent>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Collapsible>
          {/* sign me up for*/}
          <Collapsible>
            <FormField
              control={form.control}
              name="sign_me_up_for"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="md:text-lg">
                      Sign me up for
                      <span className="text-red-500">*</span>
                    </FormLabel>
                  </div>
                  <CollapsibleTrigger className="flex items-center justify-between border w-full h-10 rounded px-4">
                    <span></span>
                    <FaChevronDown className="text-xs text-gray-400" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-5">
                    {signUpFor.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="sign_me_up_for"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row w-full items-center justify-between space-x-3 px-4 space-y-2 border rounded py-1">
                              <FormLabel className="md:text-lg">
                                <p>{item.label}</p>
                              </FormLabel>
                              <FormControl>
                                <Checkbox
                                  className=" size-4"
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked: boolean) => {
                                    return checked
                                      ? field.onChange([
                                          ...(field.value || []),
                                          item.id,
                                        ]) // Provide a default value of an empty array if field.value is undefined
                                      : field.onChange(
                                          (field.value || []).filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </CollapsibleContent>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Collapsible>
          {/* Request */}
          <FormField
            control={form.control}
            name="prayer_request"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="md:text-lg">Payer Request</FormLabel>
                <FormControl>
                  <Textarea className="resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="btn-container flex items-center gap-5">
            <Button size="lg" className=" active:scale-90 w-3/12 md:text-lg ">
              Submit
            </Button>
            <Button
              asChild
              size="lg"
              variant={"outline"}
              className=" active:scale-90 w-3/12 md:text-lg border-black">
              <Link href={"/connect/getInTouch"}>Go Back</Link>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

const Question = () => {
  const formSchema = z.object({
    name: z.string().min(2, {
      message: "name must be at least 2 characters.",
    }),
    mobile_number: z
      .string()
      .refine((value) => /^\+?\d{1,3}[- ]?\d{3,}-?\d{4,}$/i.test(value), {
        message: "Please enter a valid phone number.",
      }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    question: z
      .string()
      .min(10, {
        message: "Question must be at least 10 characters.",
      })
      .max(160, {
        message: "Question must not be longer than 30 characters.",
      }),
  });
  const defaultValues: z.infer<typeof formSchema> = {
    name: "",
    mobile_number: "",
    email: "",
    question: "",
  };
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await sendQuestion(values);
      toast.success("Question sent successfully");
      form.reset();
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  }

  return (
    <div className="  lg:max-w-3xl wrapper  items-center w-full">
      <div className=" space-y-5  md:space-y-8 pb-10 text-center">
        <h1 className="text-xl md:text-2xl">Have questions or comments?</h1>
        <p className="  md:text-lg">
          New here? You&apos;ve come to the right place. Please fill out the
          form below and we will be in touch soon!
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
                  Name: <span className="text-red-500">*</span>
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
            name="mobile_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="md:text-lg">
                  Phone No: <span className="text-red-500">*</span>
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
                  <Input type="email" {...field} className="md:text-lg" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* question */}
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="md:text-lg">
                  Question: <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea className="resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="btn-container flex items-center gap-5">
            <Button size="lg" className=" active:scale-90 w-3/12 md:text-lg">
              Submit
            </Button>
            <Button
              asChild
              size="lg"
              variant={"outline"}
              className=" w-3/12 md:text-lg border-black">
              <Link href={"/connect/getInTouch"}>Go Back</Link>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
const Newsletter = () => {
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
      const res = await subscribeNewsletter(values);

      toast.success(res);
      form.reset();
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  }
  return (
    <div className=" lg:max-w-3xl wrapper  items-center w-full">
      <div className=" space-y-5  md:space-y-8 pb-10 text-center">
        <h1 className="text-xl md:text-2xl">Monthly Newsletter</h1>
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
                <FormLabel className="md:text-lg">Name</FormLabel>
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
                <FormLabel className="md:text-lg">Phone No:</FormLabel>
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

          <div className="btn-container flex items-center gap-5">
            <Button size="lg" className=" active:scale-90 w-3/12 md:text-lg">
              Submit
            </Button>
            <Button
              asChild
              size="lg"
              variant={"outline"}
              className=" w-3/12 md:text-lg border-black">
              <Link href={"/connect/getInTouch/"}>Go Back</Link>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
