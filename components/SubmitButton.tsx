"use client"
import { Button } from './ui/button';
import React from 'react'

export default function SubmitButton({ form }: { form: any }) {
  return (
    <Button
      size="lg"
      className="active:scale-90 w-3/12 md:text-lg"
    //   type="submit"
      disabled={form.formState.isSubmitting}>
      {form.formState.isSubmitting ? "Submitting..." : "Submit"}
    </Button>
  );
}
