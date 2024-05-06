"use server";

import { User } from "@prisma/client";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "./prisma";

export async function registerUser(formData: FormData) {
  const rawFormData: Partial<User> = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
  };

  const user = await prisma.user.create({ data: rawFormData });
  console.log("created user", user);
}

export async function revalidateJokes() {
  //   revalidateTag("jokes");
  revalidatePath("/");
  //   redirect("/server");
}
