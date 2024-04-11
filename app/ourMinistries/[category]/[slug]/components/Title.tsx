import React from "react";

export default function Title({ title }: { title: string }) {
  return <h1 className="text-2xl sm:text-3xl font-bold capitalize">{title}</h1>;
}
