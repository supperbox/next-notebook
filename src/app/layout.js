import "./index.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          {/* 头部 */}
          <Header />
          <div className="main">
            {/* 侧边栏 */}
            <Sidebar />
            <section className="col note-viewer">{children}</section>
          </div>
        </div>
      </body>
    </html>
  );
}
