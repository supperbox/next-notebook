import SidebarNoteListFilter from "@/components/SidebarNoteListFilter";
// import { getAllNotes } from "@/lib/redis";
import { findNote } from "@/lib/prisma";
import SidebarNoteItem from "./SidebarNoteItem";

export default async function NoteList() {
  const notes = await findNote();
  if (Object.entries(notes).length == 0) {
    return <div className="notes-empty">{"暂无笔记"}</div>;
  }

  return (
    <SidebarNoteListFilter>
      {notes.map((item) => {
        return <SidebarNoteItem key={item.id} noteId={item.id} note={item} />;
      })}
    </SidebarNoteListFilter>
  );
}
