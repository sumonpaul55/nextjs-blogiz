"use server";

import { FormValues } from "@/components/ui/BlogForm";

export const createBlog = async (data: FormValues) => {
  const res = await fetch("http://localhost:5000/blogs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify(data),
  });
  const blogData = await res.json();
  return blogData;
};
