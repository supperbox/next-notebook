// 笔记本身
import dayjs from "dayjs";
import NotePreview from "@/components/NotePreview";
import EditButton from "@/components/EditButton";
export default function Note({ noteId, note }) {
  const { title, content, updateTime } = note;

  return (
    <div className="note">
      <div className="flex justify-between items-center">
        <div className="font-[700] text-[18px] mr-[100px]">
          {"标题: " + title}
        </div>
        <div className="text-[13px]" role="status">
          Last updated on {dayjs(updateTime).format("YYYY-MM-DD hh:mm:ss")}
        </div>
        <EditButton noteId={noteId}>编辑</EditButton>
      </div>
      <div className="my-[20px] text-[16px]">正文</div>
      <NotePreview>{content}</NotePreview>
    </div>
  );
}
