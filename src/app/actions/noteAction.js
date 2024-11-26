"use server";

import { redirect } from "next/navigation";
import { newNote, updateNote, deleteNote } from "@/lib/prisma";

export async function saveNote(formData) {
  let noteId = formData.get("noteId"); // 拿到表单数据

  const data = JSON.stringify({
    title: formData.get("title"),
    content: formData.get("body"),
  });

  if (noteId) {
    await updateNote(noteId, data);
    // revalidatePath("/", "layout");
  } else {
    const res = await newNote(data);
    // revalidatePath("/", "layout");
    noteId = res; // 返回的uuid
  }
  console.log(noteId, data);
  redirect("/note/" + noteId); // 跳转到对应页面
}

export async function delNote(formData) {
  const noteId = formData.get("noteId");
  deleteNote(noteId);
  // revalidatePath("/", "layout");
  redirect("/");
}
