import SidebarNoteListFilter from "@/components/SidebarNoteListFilter";
// import { getAllNotes } from "@/lib/redis";
import { findNote } from "@/lib/prisma";
import { auth, signIn, signOut } from "auth";
import SidebarNoteItem from "./SidebarNoteItem";
import { LoginButton } from "./buttons/loginButton";
import { RouterChange } from "./routerChange";

export default async function NoteList() {
  // const session = await auth(); // 获取session；
  // if (!session) {
  //   return <RouterChange path={"login"} />;
  // }
  const notes = await findNote();
  console.log("sidebar查询所有笔记", notes);

  // 如果没有笔记，显示空状态
  if (Object.entries(notes).length == 0) {
    return <div className="notes-empty">{"暂无笔记"}</div>;
  }

  return (
    // 展示搜索后的笔记列表
    <SidebarNoteListFilter>
      {notes.map((item) => {
        return <SidebarNoteItem key={item.id} noteId={item.id} note={item} />;
      })}
    </SidebarNoteListFilter>
  );
}
