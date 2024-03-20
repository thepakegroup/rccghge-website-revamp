"use client";
import EventsBlock from "@/components/EventsBlock";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { addDays, format } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  address: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  phoneNo: z
    .string()
    .refine((value) => /^\+?\d{1,3}[- ]?\d{3,}-?\d{4,}$/i.test(value), {
      message: "Please enter a valid phone number.",
    }),
  date: z.date({
    required_error: "A date of birth is required.",
  }),

  noOfPassengers: z.string({
    required_error: "Number of passengers is required",
    invalid_type_error: "Number of passengers must be a number",
  }),
});
export default function Page() {
  const defaultValues: z.infer<typeof formSchema> = {
    name: "",
    address: "",
    phoneNo: "",
    date: new Date(),
    noOfPassengers: "",
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
    <div className="  ">
      <div className="space-y-5 py-12 md:py-20  md:space-y-14 lg:max-w-3xl bg-white  w-full wrapper  rounded-lg ">
        <div className="space-y-5">
          <h1 className="text-xl md:text-2xl">Kindly Fill The Following</h1>
          <p className="font-semibold text-sm md:text-base">
            Please enter your information below, to enable us attend to your
            need in an appropriate and timely manner.{" "}
            <span className="text-primary">
              Note: All requests for transportation must be submitted at least
              24 hours before the anticipated pick-up date.
            </span>{" "}
            Please remember to notify us immediately, if your situation has
            changed and you want us to cancel your booking.
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
                    <Input {...field} className="md:text-lg" />
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
                  <FormLabel className="md:text-lg">address</FormLabel>
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
              name="phoneNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="md:text-lg">Phone No:</FormLabel>
                  <FormControl>
                    <Input {...field} className="md:text-lg" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* date */}
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="md:text-lg">Date:</FormLabel>
                  <Popover>
                    <div className="flex flex-col">
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}>
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-4" align="start">
                        <Select
                          onValueChange={(value: string) => {
                            const date = addDays(new Date(), parseInt(value));
                            field.onChange(date);
                          }}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="0">Today</SelectItem>
                            <SelectItem value="1">Tomorrow</SelectItem>
                            <SelectItem value="3">In 3 days</SelectItem>
                            <SelectItem value="7">In a week</SelectItem>
                          </SelectContent>
                        </Select>
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </div>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* noOfPassengers */}
            <FormField
              control={form.control}
              name="noOfPassengers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="md:text-lg">
                    How many passengers? <span className="text-red-500">*</span> 
                  </FormLabel>
                  <FormControl>
                    <Input type="number" {...field} className="md:text-lg" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button size="lg" className=" w-3/12 md:text-lg">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
