import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

const allowedTags = sanitizeHtml.defaults.allowedTags.concat([
  "img",
  "h1",
  "h2",
  "h3",
]);
const allowedAttributes = Object.assign(
  {},
  sanitizeHtml.defaults.allowedAttributes,
  {
    img: ["alt", "src"],
  }
);

// 预览插件，将文本变得更加美观

export default function NotePreview({ children }) {
  return (
    <div className="mt-[20px]">
      <div
        className="text-with-markdown"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(marked(children || ""), {
            allowedTags,
            allowedAttributes,
          }),
        }}
      />
    </div>
  );
}
