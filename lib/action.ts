"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "./utils";

import slugify from "react-slugify";
import { writeClient } from "@/sanity/lib/write-client";

export type ActionState = {
  error: string;
  status: "INITIAL" | "SUCCESS" | "ERROR";
  [key: string]: unknown;
};

export const createPitch = async (
  state: ActionState,
  form: FormData,
  pitch: string
) => {
  const session = await auth();

  if (!session)
    parseServerActionResponse({ error: "Not signed in", status: "ERROR" });

  const { title, description, category, link } = Object.fromEntries(
    Array.from(form).filter(([key]) => key !== "pitch")
  );

  const slug = slugify(title as string);

  try {
    const startup = {
      title,
      createdAt: new Date().toISOString(),
      description,
      category,
      image: link,
      slug: {
        _type: "slug",
        current: slug,
      },
      author: {
        _type: "reference",
        _ref: session?.id,
      },
      pitch,
    };

    const result = await writeClient.create({ _type: "startup", ...startup });

    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.log("Error in createPitch", error);
    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }
};
