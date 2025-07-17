import NoteEditor from "@/components/NoteEditor";
// import { getNote } from "@/lib/redis";
import { findNote } from "@/lib/prisma";

export default async function EditPage({ params }) {
  const { id: noteId } = await params;
  const note = await findNote(noteId);

  console.log("/note/[id].js编辑页面", note, noteId);

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  await sleep(1000);

  // 没有找到对应id的笔记时,兜底提示报错
  if (note === null) {
    return (
      <div className="note--empty-state">
        <span className="note-text--empty-state">
          Click a note on the left to view something!
        </span>
      </div>
    );
  }

  return (
    <NoteEditor
      noteId={noteId}
      initialTitle={note.title ?? ""}
      initialBody={note.content ?? ""}
    />
  );
}
