// components/EditButton.js
import Link from "next/link";

export default function EditButton({ noteId, children }) {
  const isDraft = noteId == null;
  return (
    // 进入edit编辑页面
    <Link href={`/note/edit/${noteId || ""}`} className="link--unstyled">
      <button
        className={[
          "edit-button",
          isDraft ? "edit-button--solid" : "edit-button--outline",
        ].join(" ")}
        role="menuitem"
      >
        {/* 编辑二字 */}
        {children}
      </button>
    </Link>
  );
}
